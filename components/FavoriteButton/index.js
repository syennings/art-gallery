import React from "react";
import styles from "./FavoriteButton.module.css"; // Adjust the import path accordingly
import Image from "next/image";
export function FavoriteButton({ onToggleFavorite, slug }) {
  console.log("favourite button", onToggleFavorite);

  return (
    <>
      <button
        type="button"
        onClick={() => onToggleFavorite(slug)}
        className={styles.svgHeart}
        style={{ backgroundColor: "white", border: "0" }}
      >
        <Image
          src="/resources_gallery/assets/heart.svg" // Adjust the path accordingly
          alt="heart"
          width={60}
          height={60}
          style={{ color: "red" }}
        />
      </button>
    </>
  );
}
