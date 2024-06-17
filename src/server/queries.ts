import { auth } from "@clerk/nextjs/server";
import "server-only"
import { db } from "~/server/db";

export default async function getMyImages(){

    const user = auth()

    if (!user.userId) throw new Error("Unauthorized")
    
    const images = await db.query.images.findMany({
        where:(model, {eq})=>eq(model.userId, user.userId),
        orderBy:(model,{asc})=>asc(model.id)
      });
    
      
    
    return images
}
