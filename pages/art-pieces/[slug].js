import { useRouter } from "next/router";

import { ArtPiecesDetails } from "@/components/ArtPiecesDetails";

export default function ArtPieceDetailsPage({ pieces }) {
  const router = useRouter();
  const { slug } = router.query;

  const { imageSource, name, artist, year, genre, colors } = pieces.find(
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
        // color={color[0]}
      />
    </>
  );
}
