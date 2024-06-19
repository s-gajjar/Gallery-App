
import { SignInButton, SignOutButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { SimpleUploadButton } from "./simple-upload-button";

export default function TopNav(){
    return(
      <nav className="flex w-full items-center justify-between p-4 text-xl font-semibold border-b">
        <div>Gallery</div>     
        
        <div className="flex flex-row gap-4">
          
          <SignedOut>
            <SignInButton/>
          </SignedOut>
          <SignedIn>
            <SimpleUploadButton/>
            <UserButton/>
          </SignedIn>

        </div>
      </nav>
    )
  }