import { ArtPieces } from "@/components/ArtPieces";

export default function ArtPiecesPage({ pieces, onToggleFavorite }) {
  console.log("onToggleFavorite art pieces pageeeeee", onToggleFavorite);

  return (
    <>
      <ArtPieces pieces={pieces} onToggleFavorite={onToggleFavorite} />
      <h1> Hello </h1>
    </>
  );
}
