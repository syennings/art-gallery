import { useRouter } from "next/router";

import { ArtPiecesDetails } from "@/components/ArtPiecesDetails";

export default function ArtPieceDetailsPage({
  pieces,
  onToggleFavorite,
  artPiecesInfo,
  isFavorite,
  onHandleComment,
}) {
  const router = useRouter();
  let { slug } = router.query;

  let { imageSource, name, artist, year, genre, colors } = pieces.find(
    (piece) => piece.slug === slug
  );
  console.log("colors of artPiece: ", colors);
  console.log("artPiecesInfo", artPiecesInfo);

  let comments = artPiecesInfo.find((piece) => piece.slug === slug)?.comments;

  console.log("alllll the comments", comments);

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
        onHandleComment={onHandleComment}
        comments={comments}
      />
    </>
  );
}
