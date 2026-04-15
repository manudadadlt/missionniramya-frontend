import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function acts as the un-passable shield block on the Edge Network.
export function middleware(request: NextRequest) {
  
  // 1. Identify where they are trying to go
  const path = request.nextUrl.pathname;
  const isProtectedPath = path.startsWith('/dashboard') || path.startsWith('/lesson') || path.startsWith('/programs') || path.startsWith('/account') || path.startsWith('/admin');

  // 2. Look for the secure student token stamp in their browser cookies
  const token = request.cookies.get('strapi_jwt')?.value;

  // 3. Security Router Logic
  if (isProtectedPath && !token) {
    // Intruders are kicked instantly back to the gateway
    return NextResponse.redirect(new URL('/login', request.url));
  }

  if (path === '/login' && token) {
    // If they are already logged in, they shouldn't see the login page
    return NextResponse.redirect(new URL('/', request.url));
  }

  // 4. They have a token, we allow them to pass to the requested lesson!
  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/lesson/:path*', '/programs/:path*', '/account/:path*', '/admin/:path*', '/login'],
};
