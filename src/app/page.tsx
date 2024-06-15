import Link from "next/link";
import { db } from "~/server/db";

// Define the mock URLs array
const mockUrls = [
  "https://utfs.io/f/04604c37-e4a0-48f7-9ec0-5157b1cac9f4-onopfv.jpg",
  "https://utfs.io/f/156318f9-44d3-4901-804f-6e4f97e6b81f-b95z5u.webp",
  "https://utfs.io/f/eeddaeca-3f9d-4618-a62a-32362e2b3994-5yb17s.webp",
  "https://utfs.io/f/9ca676e5-a33f-4227-9bff-5f3dc37fd7b2-dydny6.webp",
  "https://utfs.io/f/9ca676e5-a33f-4227-9bff-5f3dc37fd7b2-dydny6.webp",
  "https://utfs.io/f/eeddaeca-3f9d-4618-a62a-32362e2b3994-5yb17s.webp",
];

// Map the URLs to objects with id and url properties
const mockImage = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

// HomePage component
export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log(posts);

  return (
    <div className="flex flex-wrap">
    {posts.map((posts)=>(
      <div key={posts.id}>{posts.name} </div>
    ))}

    {[...mockImage, ...mockImage, ...mockImage].map((image, index) => (
      <div key={image.id + "-" + index} className="w-48 p-4">
        <img src={image.url} alt={`Mock Image ${index + 1}`} />
      </div>
    ))}
    
    </div>
  );
}
