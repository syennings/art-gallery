import Image from "next/image";

export function FavoriteButton({ onToggleFavorite, slug }) {
  return (
    <>
      <button type="button" onClick={() => onToggleFavorite(slug)}>
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
