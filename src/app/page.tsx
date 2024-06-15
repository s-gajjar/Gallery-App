import { headers } from "next/headers";
import Link from "next/link";
import { db } from "~/server/db";

// Define the mock URLs array


export const dynamic = "force-dynamic"


// HomePage component
export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy:(model,{desc})=>desc(model.id)
  });

  return (
    <div className="flex flex-wrap">
    

    {[...images, ...images, ...images].map((image, index) => (
      <div key={image.id + "-" + index} className="flex w-48 flex-col p-4">
        <img src={image.url} alt={`Mock Image ${index + 1}`} />
        <div>{image.name}</div>
      </div>
    ))}

    </div>
  );
}
