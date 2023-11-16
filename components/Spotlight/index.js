import Image from "next/image";
import { FavoriteButton } from "../FavoriteButton";

export function Spotlight({
  slug,
  image,
  artist,
  onToggleFavorite,
  isFavorite,
}) {
  return (
    <>
      <h1> A Highlight Piece From The Collection</h1>
      <Image src={image} alt={artist} width={300} height={300} />
      <h3> Name of Artist: {artist} </h3>
      <FavoriteButton
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
        slug={slug}
      ></FavoriteButton>
    </>
  );
}
