import { ArtPiecePreview } from "../ArtPiecePreview";
import Link from "next/link";

export function ArtPieces({ pieces = [], onToggleFavorite }) {
  const invertColor = (hex) => {
    // Function to invert a hex color
    return (
      "#" +
      (0xffffff ^ parseInt(hex.slice(1), 16)).toString(16).padStart(6, "0")
    );
  };

  console.log("onToggleFavorite art pieces component", onToggleFavorite);

  return (
    <>
      <ul>
        {pieces.map((piece) => (
          <li key={piece.slug}>
            <ArtPiecePreview
              onToggleFavorite={onToggleFavorite}
              artist={piece.artist}
              title={piece.name}
              image={piece.imageSource}
              colors={piece.colors}
              slug={piece.slug}
            />
            <Link href={`/art-pieces/${piece.slug}`}>Look at Details</Link>
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
