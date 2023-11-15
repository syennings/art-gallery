import Image from "next/image";

export function ArtPiecePreview({ title, artist, image, colors }) {
  return (
    <>
      <h1> {artist} </h1>
      <h2> {title} </h2>
      <Image
        src={image}
        alt={title}
        width={500}
        height={500}
        onError={(e) => console.error(`Error loading image: ${e.target.src}`)}
      />
    </>
  );
}
