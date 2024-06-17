import { SignedIn, SignedOut } from "@clerk/nextjs";
import { db } from "~/server/db";
import getMyImages from "~/server/queries";



export const dynamic = "force-dynamic"


async function Images(){
  const images = await getMyImages()

  return(
    <div className="flex flex-wrap gap-4">
        {[...images].map((image, ) => (
          <div key={image.id} className="flex w-48 flex-col p-4">
            <img src={image.url} />
            <div>{image.name}</div>
          </div>
          
        ))}
    </div>
    )
}

// HomePage component
export default async function HomePage() {
  return (
    <main className="flex flex-wrap">
      <SignedOut>
        <div className="h-full w-full text-2xl text-center">Please sign in above</div>
      </SignedOut>
      <SignedIn>
        <Images/>
      </SignedIn>

    </main>
  );
}
