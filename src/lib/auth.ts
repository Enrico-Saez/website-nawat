import { Lucia } from 'lucia';
import { AstroDBAdapter } from "lucia-adapter-astrodb";
import { MicrosoftEntraId, generateCodeVerifier, generateState } from 'arctic';
import { db, Session, User } from 'astro:db';
import { TENANT_ID, CLIENT_ID, CLIENT_SECRET } from "astro:env/server"

const adapter = new AstroDBAdapter(db, Session, User); // your adapter

export const lucia = new Lucia(adapter, {
	sessionCookie: {
		attributes: {
			// set to `true` when using HTTPS
			secure: import.meta.env.PROD
		}
	}
});

declare module 'lucia' {
	interface Register {
		Lucia: typeof lucia;
	}
}

const state = generateState();
const codeVerifier = generateCodeVerifier();

const entraId = new MicrosoftEntraId(TENANT_ID, CLIENT_ID, CLIENT_SECRET, import.meta.env.BASE_URL);

const url: URL = await entraId.createAuthorizationURL(state, codeVerifier, {
	// optional
	scopes: [
		"profile",
		"email"
	] // "openid" always included
});

// store state verifier as cookie
setCookie("state", state, {
    secure: true, // set to false in localhost
    path: "/",
    httpOnly: true,
    maxAge: 60 * 10 // 10 min
});

// store code verifier as cookie
setCookie("code_verifier", codeVerifier, {
    secure: true, // set to false in localhost
    path: "/",
    httpOnly: true,
    maxAge: 60 * 10 // 10 min
});

return redirect(url);