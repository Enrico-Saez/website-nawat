import jwt from 'jsonwebtoken';

const SECRET_KEY = 'your-secret-key'; // Use a mesma chave usada no login

export async function handle({ context, resolve }) {
  const sessionCookie = context.cookies.get('session');

  if (sessionCookie) {
    try {
      const session = jwt.verify(sessionCookie, SECRET_KEY);
      context.locals.user = session; // Armazena os dados do usuário para usar nas rotas
    } catch {
      context.locals.user = null; // Token inválido ou expirado
    }
  } else {
    context.locals.user = null;
  }

  return resolve(context);
}
