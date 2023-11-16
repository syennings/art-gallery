import { useRouter } from "next/router";

import { ArtPiecesDetails } from "@/components/ArtPiecesDetails";

export default function ArtPieceDetailsPage({
  pieces,
  onToggleFavorite,
  artPiecesInfo,
  isFavorite,
}) {
  const router = useRouter();
  let { slug } = router.query;

  let { imageSource, name, artist, year, genre, colors } = pieces.find(
    (piece) => piece.slug === slug
  );
  console.log("colors of artPiece: ", colors);

  return (
    <>
      <ArtPiecesDetails
        image={imageSource}
        name={name}
        artist={artist}
        year={year}
        genre={genre}
        onToggleFavorite={onToggleFavorite}
        slug={slug}
        artPiecesInfo={artPiecesInfo}
        isFavorite={isFavorite}

        // color={color[0]}
      />
    </>
  );
}
