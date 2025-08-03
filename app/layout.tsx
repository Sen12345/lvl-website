import type { Metadata } from "next";
import "/assets/styles/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Toaster, toast } from "sonner";

import { APP_DESCRIPTION, APP_NAME } from "../lib/constants";

export const metadata: Metadata = {
  title: { template: `%s | London Vibes Ltd`, default: APP_NAME },
  description: APP_DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Toaster richColors position="top-right" />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
