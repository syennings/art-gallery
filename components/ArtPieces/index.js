import { ArtPiecePreview } from "../ArtPiecePreview";

export function ArtPieces({ pieces }) {
  return (
    <>
      <ul>
        {pieces.map((piece) => (
          <li key={piece.slug}>
            <ArtPiecePreview
              artist={piece.artist}
              title={piece.name}
              image={piece.imageSource}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
