import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";



function TopNav(){
  return(
    <nav className="flex w-full items-center justify-between p-4 text-xl font-semibold border-b">
      <div>Gallery</div>
      <div>Signin</div>
    </nav>
  )
}




export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} flex flex-col gap-4`}>
      <body>
        <TopNav/>
        {children}
      </body>
    </html>
  );
}
