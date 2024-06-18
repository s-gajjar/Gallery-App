import "~/styles/globals.css";
import "@uploadthing/react/styles.css";

import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

import { GeistSans } from "geist/font/sans";
import TopNav from "./_components/topnav";
import { NextSSRPlugin } from '@uploadthing/react/next-ssr-plugin';
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "./api/uploadthing/core";

export const  metadata = {
  title: 'Gallery App',
  description: "ok this is triall app by shreyansh"
}


export default function RootLayout({
  children,
  modal
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${GeistSans.variable} flex flex-col gap-4`}>
        <body>
        <NextSSRPlugin
        /**
         * The `extractRouterConfig` will extract **only** the route configs
         * from the router to prevent additional information from being
         * leaked to the client. The data passed to the client is the same
         * as if you were to fetch `/api/uploadthing` directly.
         */
        routerConfig={extractRouterConfig(ourFileRouter)}
      />
        <TopNav/>
          {children}
          {modal}
          <div id="modal-root" />
        </body>
      </html>
    </ClerkProvider>
  );
}
