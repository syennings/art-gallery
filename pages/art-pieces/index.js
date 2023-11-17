import { ArtPieces } from "@/components/ArtPieces";

export default function ArtPiecesPage({
  pieces,
  onToggleFavorite,
  onHandleComment,
  comments,
}) {
  console.log("onToggleFavorite art pieces pageeeeee", onToggleFavorite);

  return (
    <>
      <ArtPieces
        pieces={pieces}
        onToggleFavorite={onToggleFavorite}
        onHandleComment={onHandleComment}
        comments={comments}
      />

      <h1> Hello </h1>
    </>
  );
}
