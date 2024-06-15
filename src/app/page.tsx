import { SignedIn, SignedOut } from "@clerk/nextjs";
import { db } from "~/server/db";

// Define the mock URLs array


export const dynamic = "force-dynamic"


async function Images(){
  const images = await db.query.images.findMany({
    orderBy:(model,{desc})=>desc(model.id)
  });

  return(
    <div className="flex flex-wrap gap-4">
        {[...images, ...images, ...images].map((image, index) => (
          <div key={image.id + "-" + index} className="flex w-48 flex-col p-4">
            <img src={image.url} alt={`Mock Image ${index + 1}`} />
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
