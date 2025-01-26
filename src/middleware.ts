import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { routeAccessMap } from "./lib/setting";
import { NextRequest, NextResponse } from "next/server";

const RouteAllowed=Object.keys(routeAccessMap).map((key)=>{
  return {
    isProtectedRoute:createRouteMatcher([key]),
    allowed:routeAccessMap[key]
  }
})
// const isProtectedRoute = createRouteMatcher(['/admin', '/teacher'])

export default clerkMiddleware(async (auth, req) => {
  auth.protect()
  const { userId, sessionClaims } = auth();
const role = sessionClaims?.publicMetadata?.role || 'teacher';

  for (const {isProtectedRoute,allowed} of RouteAllowed){
    if (isProtectedRoute(req) && !allowed.includes(role)) {
      return NextResponse.redirect(new URL(`/${role}`, req.url));
    }  }
    
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}; 