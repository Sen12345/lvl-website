export { auth as middleware } from "@/auth";

export const config = {
  publicRoutes: ["/app/api/uploadthing/route"],
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};

// export { auth as middleware } from "@/auth";
// // middleware.ts
// import { NextRequest, NextResponse } from "next/server";

// export default function middleware(request: NextRequest) {
//   const response = NextResponse.next();

//   if (request.nextUrl.pathname.startsWith("/admin")) {
//     // simple redirect
//     return NextResponse.redirect(new URL("/login", request.url));
//   }

//   return response;
// }
