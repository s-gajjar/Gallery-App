import "~/styles/globals.css";
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

import { GeistSans } from "geist/font/sans";
import TopNav from "./_components/topnav";

export const  metadata = {
  title: 'Gallery App',
  description: "ok this is triall app by shreyansh"
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${GeistSans.variable} flex flex-col gap-4`}>
        <body>
          <TopNav/>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
