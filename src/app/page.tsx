import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic"

async function Images() {
  const images = await getMyImages()

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {[...images].map((image) => (
        <div key={image.id} className="flex w-48 h-48 flex-col p-4">
          <Link href={`/img/${image.id}`}> 
            <Image
              src={image.url}
              style={{ objectFit: "contain" }} 
              alt={image.name}
              width={192}
              height={192}
            />
          </Link>
          <div className="text-center">{image.name}</div>
        </div>
      ))}
    </div>
  )
}

// HomePage component
export default async function HomePage() {
  return (
    <main className="flex flex-col items-center min-h-screen p-4">
      <SignedOut>
        <div className="h-full w-full text-2xl text-center">Please sign in above</div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
