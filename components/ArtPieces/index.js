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
                colors={piece.colors}
              />
            </Link>
            <div>
              {piece.colors.map((color, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: color,
                    margin: "5px",
                    padding: "5px",
                  }}
                >
                  {color}
                </div>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
