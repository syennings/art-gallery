import { ArtPieces } from "@/components/ArtPieces";

export default function FavoritesPage({
  pieces,
  artPiecesInfo,
  onToggleFavorite,
  onHandleComment,
  comments,
}) {
  const favorites = pieces.filter((piece) =>
    artPiecesInfo.find(
      (artPiece) => artPiece.slug === piece.slug && artPiece.isFavorite
    )
  );
  console.log(favorites);

  return (
    <>
      <h1> Your Favorite Art Pieces </h1>
      <ArtPieces
        pieces={favorites}
        onToggleFavorite={onToggleFavorite}
        onHandleComment={onHandleComment}
        comments={comments}
      ></ArtPieces>
    </>
  );
}
