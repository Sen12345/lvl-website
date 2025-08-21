export { auth as middleware } from "@/auth";

export const config = {
  publicRoutes: ["/api/uploadthing"],
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
