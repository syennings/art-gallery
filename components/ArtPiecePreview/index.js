import Image from "next/image";
import { FavoriteButton } from "../FavoriteButton";

export function ArtPiecePreview({
  title,
  artist,
  image,
  slug,
  isFavorite,
  artPiecesInfo,
  onToggleFavorite,
  onHandleComment,
}) {
  console.log("a new slug", slug);
  return (
    <>
      <div>
        <h1> {artist} </h1>
        <h2> {title} </h2>
        <Image
          src={image}
          alt={title}
          width={500}
          height={500}
          onError={(e) => console.error(`Error loading image: ${e.target.src}`)}
        />
      </div>
      <div>
        <FavoriteButton
          artPiecesInfo={artPiecesInfo}
          isFavorite={isFavorite}
          slug={slug}
          onToggleFavorite={onToggleFavorite}
          onHandleComment={onHandleComment}
        ></FavoriteButton>
      </div>
    </>
  );
}
