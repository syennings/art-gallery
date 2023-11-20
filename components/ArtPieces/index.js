// ArtPieces.jsx
import { ArtPiecePreview } from "../ArtPiecePreview";
import Link from "next/link";
import styles from "./ArtPieces.module.css"; // Import your CSS module

export function ArtPieces({
  pieces = [],
  onToggleFavorite,
  onHandleComment,
  comments,
}) {
  return (
    <>
      <ul className={styles.artlist}>
        {pieces.map((piece) => (
          <li key={piece.slug}>
            <div>
              <ArtPiecePreview
                onToggleFavorite={onToggleFavorite}
                artist={piece.artist}
                title={piece.name}
                image={piece.imageSource}
                colors={piece.colors}
                slug={piece.slug}
                onHandleCommens={onHandleComment}
                comments={comments}
              />
              <div>
                <Link
                  href={`/art-pieces/${piece.slug}`}
                  passHref
                  className={styles.MoreDetailsLink}
                >
                  More Details
                </Link>
                <div className={styles.ColorPalette}>
                  {piece.colors.map((color, index) => (
                    <div
                      key={index}
                      className={styles.ColorBox}
                      style={{
                        backgroundColor: color,
                      }}
                    >
                      <span className={styles.HexCode}>{color}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
