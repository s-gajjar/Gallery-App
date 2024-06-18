import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import getMyImages from "~/server/queries";



export const dynamic = "force-dynamic"


async function Images(){
  const images = await getMyImages()

  return(
    <div className="flex flex-wrap justify-center gap-4">
        {images.map((image) => (
          <div key={image.id} className="flex w-48 h-48 flex-col p-4">
            <Image
              src={image.url}
              style={{objectFit:"contain"}} 
              alt={image.name}
              width={192}
              height={192}
            />
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
