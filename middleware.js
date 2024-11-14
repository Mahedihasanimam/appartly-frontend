import { NextResponse } from 'next/server';

export function middleware(req) {
  const token =localStorage.getItem('token'); // Assuming the token is stored in cookies

  if (!token) {
    // Redirect to the login page if the token is not present
    return NextResponse.redirect(new URL('/login', req.url));
  }

  // Continue to the requested page if authenticated
  return NextResponse.next();
}

// Apply middleware only to specific paths
export const config = {
  matcher: ['/Profile', '/ownerProfile',''], // Add paths you want to protect
};
