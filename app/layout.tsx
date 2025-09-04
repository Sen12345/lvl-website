import type { Metadata } from "next";
import "/assets/styles/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "@/app/api/uploadthing/core";

import { APP_DESCRIPTION, APP_NAME } from "../lib/constants";
import { InvoiceProvider } from "@/context/invoice-context";

import { connection } from "next/server";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: { template: `%s | London Vibes Ltd`, default: APP_NAME },
  description: APP_DESCRIPTION,
};

async function UTSSR() {
  await connection();
  return <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <InvoiceProvider>
        <body className={`${inter.className} antialiased`}>
          <Suspense>
            <UTSSR />
          </Suspense>
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
      </InvoiceProvider>
    </html>
  );
}
