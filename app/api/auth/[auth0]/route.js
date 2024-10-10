import { handleAuth, handleLogout } from '@auth0/nextjs-auth0'

export const GET = handleAuth({
  logout: handleLogout({ returnTo: 'https://ashy-island-0f0ebea10.5.azurestaticapps.net/api/auth/login' }),
})
