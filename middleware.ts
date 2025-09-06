export { auth as middleware } from "@/auth";
// middleware.ts
import { NextRequest, NextResponse } from "next/server";

function middleware(request: NextRequest) {
  const response = NextResponse.next();

  if (request.nextUrl.pathname.startsWith("/admin")) {
    // simple redirect
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return response;
}
