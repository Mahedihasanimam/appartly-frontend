import { isAuthenticated } from '@/util/isAuthenticated';
import { NextResponse } from 'next/server';

export function middleware(req) {


  if (!isAuthenticated()) {
    // Redirect to the login page if the token is not present
    return NextResponse.redirect(new URL('/auth/OwnarLogin', req.url));
  }

  // Continue to the requested page if authenticated
  return NextResponse.next();
}

// Apply middleware only to specific paths
export const config = {
  matcher: ['/Profile', '/ownerProfile','/editprofile'], // Add paths you want to protect
};
