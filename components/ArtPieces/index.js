import { ArtPiecePreview } from "../ArtPiecePreview";

import Link from "next/link";

export function ArtPieces({ pieces = [] }) {
  return (
    <>
      <ul>
        {pieces.map((piece) => (
          <li key={piece.slug}>
            <Link href={`/art-pieces/${piece.slug}`}>
              <ArtPiecePreview
                artist={piece.artist}
                title={piece.name}
                image={piece.imageSource}
              />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
