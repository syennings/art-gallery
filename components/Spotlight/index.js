import Image from "next/image";
import { FavoriteButton } from "../FavoriteButton";

export function Spotlight({
  artPiecesInfo,
  slug,
  image,
  artist,
  onToggleFavorite,
  isFavorite,
  onHandleComment,
  comments,
}) {
  console.log("slug", slug);
  console.log("art info", artPiecesInfo);

  return (
    <>
      <h1> A Highlight Piece From The Collection</h1>
      <Image src={image} alt={artist} width={300} height={300} />
      <h3> Name of Artist: {artist} </h3>
      <FavoriteButton
        artPiecesInfo={artPiecesInfo}
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
        slug={slug}
        onHandleComment={onHandleComment}
        comments={comments}
      ></FavoriteButton>
    </>
  );
}
