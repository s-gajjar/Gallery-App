import { auth } from "@clerk/nextjs/server";
import "server-only"
import { db } from "~/server/db";


export async function getMyImages(){
  const user = auth()


    if (!user.userId) throw new Error("Unauthorized")
    
    const images = await db.query.images.findMany({
        where:(model, {eq})=>eq(model.userId, user.userId),
        orderBy:(model,{asc})=>asc(model.id)
      });
    
      
    
    return images
}

export async function getImage(id: number) {
  const user = auth()

  if(!user.userId) throw Error("Unauthorized")

  const image = await db.query.images.findFirst({
    where: (model, {eq}) => eq(model.id, id)
  })
  if(!image) throw new Error("Image not found")

  if(image.userId !== user.userId) throw Error("Unauthorized")

  return image
}