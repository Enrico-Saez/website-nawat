export const prerender = false;

import type { APIRoute } from 'astro';
import { db, eq, User } from 'astro:db';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.SECRET_KEY!;

export const POST: APIRoute = async ({ request, cookies }) => {
  try {
    const { username, password } = await request.json();

    const user = await db.select().from(User).where(eq(User.username, username)).execute();

    if (user.length === 0 || !(await bcrypt.compare(password, user[0].passwordHash))) {
      return new Response(JSON.stringify({ error: 'Invalid username or password' }), { status: 401 });
    }

      // Gerar um token JWT
      const token = jwt.sign({ id: user[0].id, username: user[0].username }, SECRET_KEY, { expiresIn: '7d' });

      // Definir o cookie HTTP-only
      cookies.set('session', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        path: '/',
        maxAge: 7 * 24 * 60 * 60, // 7 dias
      });

      return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (err) {
      console.error(err);
      return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
    }
};
