export { auth as middleware } from "@/auth";

export const config = {
  publicRoutes: ["app/api/uploadthing/route"],
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
