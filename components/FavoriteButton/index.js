import React from "react";
import styles from "./FavoriteButton.module.css"; // Adjust the import path accordingly

export function FavoriteButton({ onToggleFavorite, slug }) {
  return (
    <>
      <button
        type="button"
        onClick={() => onToggleFavorite(slug)}
        className={styles.svgHeart}
        style={{ backgroundColor: "white", border: "0" }}
      >
        <img
          src="/resources_gallery/assets/heart.svg" // Adjust the path accordingly
          alt="heart"
          width={60}
          height={60} // Use styles.svgHeart assuming that's the correct class name
        />
      </button>
    </>
  );
}
