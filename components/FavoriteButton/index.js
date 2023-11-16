import Image from "next/image";

export function FavoriteButton({ isFavorite, onToggleFavorite, slug }) {
  return (
    <>
      <button
        type="button"
        onClick={() => onToggleFavorite(slug)}
        style={{ backgroundColor: isFavorite ? "red" : "transparent" }}
      >
        <Image
          src="./resources_gallery/assets/heart.svg"
          alt="heart"
          width={60}
          height={60}
        />
      </button>
    </>
  );
}
