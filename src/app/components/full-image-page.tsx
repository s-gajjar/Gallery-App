import { getImage } from "~/server/queries";
import { clerkClient } from "@clerk/nextjs/server"

export default async function FullPageImageView(props : {id: number}) {
  const image = await getImage(props.id)
  const uploaderInfo = await clerkClient.users.getUser(image.userId)
  return ( 
    <div className = "flex h-full w-full min-w-0">
      
      <div className = "flex flex-shrink justify-center items-center">
        <img src={image.url} className="flex-shrink object-contain"/>
      </div>
      
      <div className="flex w-48 flex-shrink-0 flex-col border-l ">
        <div className="text-lg border-b text-center">{image.name}</div>

        
        <div className="flex flex-col p-2">
          <span>Uploaded by:</span>
          <span>{uploaderInfo.fullName}</span>
        </div>
        </div>
        <div className="flex flex-col p-2">
          <span>Created On:</span>
          <span>{new Date(image.createdAt).toLocaleDateString()}</span>
        </div>


    </div>
  );
}