import { getImage } from "~/server/queries";
import { Modal } from "./modal";
import FullPageImageView from "~/app/components/full-image-page";

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idAsNumber = Number(photoId)
  if(Number.isNaN(idAsNumber)) throw new Error("Invalid photo id")

  const image = await getImage(idAsNumber)
  return (<Modal>
  <FullPageImageView id={idAsNumber}/>
  </Modal>
  );
}