import { ArtPieces } from "@/components/ArtPieces";

export default function FavoritesPage({
  pieces,
  artPiecesInfo,
  onToggleFavorite,
}) {
  const favorites = pieces.filter((piece) =>
    artPiecesInfo.find(
      (artPiece) => artPiece.slug === piece.slug && artPiece.isFavorite
    )
  );
  console.log(favorites);

  return (
    <>
      <h1> favorite </h1>
      <ArtPieces
        pieces={favorites}
        onToggleFavorite={onToggleFavorite}
      ></ArtPieces>
    </>
  );
}
