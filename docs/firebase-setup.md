# Firebase & Google OAuth Setup

This document explains how to remove hard-coded secrets from the repository and configure the app to use user-provided credentials (via Google OAuth) and environment variables at runtime.

## 1. Replace secrets with environment variables
We removed secrets from `firebase-applet-config.json` and replaced them with environment variable placeholders. Set the following environment variables in your deployment and development environments (local .env, CI secrets, or platform-provided secrets):

- FIREBASE_APP_ID
- FIREBASE_API_KEY
- FIREBASE_AUTH_DOMAIN
- FIREBASE_STORAGE_BUCKET
- FIREBASE_MESSAGING_SENDER_ID
- FIREBASE_MEASUREMENT_ID
- GOOGLE_OAUTH_CLIENT_ID
- RECAPTCHA_SITE_KEY

## 2. Obtaining OAuth credentials
1. Go to Google Cloud Console -> APIs & Services -> Credentials.
2. Create an OAuth 2.0 Client ID (Web application) and add your authorized origins and redirect URIs.
3. Configure the OAuth Consent Screen with the required scopes and submit for verification if you request restricted scopes.
4. Copy the Client ID into `GOOGLE_OAUTH_CLIENT_ID` and the Client Secret into your environment/secret storage (do not commit the client secret). The client secret should be kept private and injected into your server-side runtime (e.g., process.env.GOOGLE_OAUTH_CLIENT_SECRET).

## 3. Using Google OAuth to request user permission
- Implement a server-side OAuth flow (recommended) to exchange authorization codes for tokens using the client secret stored in environment variables.
- Example scopes (adjust to least privilege): `openid email profile`.
- After obtaining the tokens, you can create a Firebase custom token or sign in users via Firebase Admin SDK if needed.

## 4. Runtime configuration
- For client-side Firebase initialization, populate the runtime config by reading environment variables during your build (e.g., using a bundler plugin) or by serving a small endpoint from the server that returns the sanitized config to authenticated clients.
- Do not embed private secrets (client secret) in client-side code.

## 5. Example (Node.js express server)
- Store the Google OAuth client secret in `GOOGLE_OAUTH_CLIENT_SECRET` (server-side only).
- Expose an endpoint `/config` that returns the non-secret Firebase config (apiKey is okay for Firebase client use but treat it as public-like; still keep it out of VCS):

```js
// server/config.js
app.get('/config', (req, res) => {
  res.json({
    appId: process.env.FIREBASE_APP_ID,
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID,
    oAuthClientId: process.env.GOOGLE_OAUTH_CLIENT_ID,
    recaptchaSiteKey: process.env.RECAPTCHA_SITE_KEY
  });
});
```

## 6. Security notes
- Keep the Google OAuth client secret and any server-side refresh tokens in secret storage (CI secrets, Vault, or platform secret manager).
- Rotate keys regularly and restrict OAuth consent scopes to the minimum required.
- If you need to request additional access from users, implement incremental authorization rather than requesting broad scopes up-front.

If you want, I can also:
- Add server-side example code for the OAuth authorization code exchange and token refresh.
- Create a `.env.example` file and update the client initialization code to fetch runtime config.
