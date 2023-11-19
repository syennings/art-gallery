// ArtPieces.jsx

import { ArtPiecePreview } from "../ArtPiecePreview";
import Link from "next/link";
import styles from "./ArtPiecesStyles.module.css"; // Adjust the import path accordingly

export function ArtPieces({
  pieces = [],
  onToggleFavorite,
  onHandleComment,
  comments,
}) {
  const invertColor = (hex) => {
    return (
      "#" +
      (0xffffff ^ parseInt(hex.slice(1), 16)).toString(16).padStart(6, "0")
    );
  };

  return (
    <>
      <ul className={styles.ArtPiecesList}>
        {pieces.map((piece) => (
          <li key={piece.slug} className={styles.ArtPieceListItem}>
            <div className={styles.ArtPiecePreviewContainer}>
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
              <div className={styles.ArtPieceDetails}>
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
                        color: invertColor(color),
                        backgroundColor: color,
                      }}
                    >
                      {color}
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
