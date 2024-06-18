import FullPageImageView from "~/app/components/full-image-page";
import { getImage } from "~/server/queries";

export default async function PhotoPage({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idAsNumber = Number(photoId)
  if(Number.isNaN(idAsNumber)) throw new Error("Invalid photo id")

    const image = await getImage(idAsNumber)
    return <FullPageImageView id={idAsNumber}/>
  }