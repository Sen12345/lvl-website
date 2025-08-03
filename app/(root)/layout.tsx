import Footer from "@/components/footer";
import Header from "@/components/shared/header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="max-w-screen overflow-hidden">
      <Header />
      <main className="min-h-screen  ">{children}</main>
      <Footer />
    </div>
  );
}
