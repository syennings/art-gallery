import { ArtPiecePreview } from "../ArtPiecePreview";
import Link from "next/link";

export function ArtPieces({ pieces = [] }) {
  const invertColor = (hex) => {
    // Function to invert a hex color
    return (
      "#" +
      (0xffffff ^ parseInt(hex.slice(1), 16)).toString(16).padStart(6, "0")
    );
  };
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
            <div style={{ display: "flex" }}>
              {piece.colors.map((color, index) => (
                <div
                  key={index}
                  style={{
                    color: invertColor(color),
                    backgroundColor: color,
                    border: "1px solid black",
                    borderRadius: "4px",
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
