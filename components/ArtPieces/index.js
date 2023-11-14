import { ArtPiecePreview } from "../ArtPiecePreview";
import Image from "next/image";

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
            <Image
              src={piece.imageSource}
              alt={piece.name}
              width={500}
              height={500}
              onError={(e) =>
                console.error(`Error loading image: ${e.target.src}`)
              }
            />
          </li>
        ))}
      </ul>
    </>
  );
}
