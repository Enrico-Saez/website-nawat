import { Lucia } from 'lucia';

const adapter = new BetterSQLite3Adapter(db); // your adapter

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

import { MicrosoftEntraId, MicrosoftEntraIdTokens } from 'arctic';

const entraId = new MicrosoftEntraId(tenantId, clientId, clientSecret, redirectURI);

const url: URL = await entraId.createAuthorizationURL(state, codeVerifier, {
	// optional
	scopes // "openid" always included
});
const tokens: MicrosoftEntraIdTokens = await entraId.validateAuthorizationCode(code, codeVerifier);
const tokens: MicrosoftEntraIdTokens = await entraId.refreshAccessToken(refreshToken);
