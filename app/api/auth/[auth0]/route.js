import { handleAuth } from '@auth0/nextjs-auth0';

export default async function GET(req, res) {
    // Set cookie headers to clear specific cookies
    res.setHeader('Set-Cookie', [
      'auth0.is.authenticated=; Max-Age=0; Path=/; HttpOnly; Secure;', // Clear the Auth0 authentication cookie
      'your_session_cookie=; Max-Age=0; Path=/; HttpOnly; Secure;', // Clear your custom session cookie, if any
    ]);
  
    // Call Auth0's handleLogout to log out the user from Auth0
    await handleAuth();
  }
