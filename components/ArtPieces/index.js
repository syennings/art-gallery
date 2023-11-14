import Image from "next/image";

export function ArtPieces({ pieces }) {
  return (
    <>
      <ul>
        {pieces.map((piece) => (
          <li key={piece.slug}>
            <h3>{piece.name}</h3>
            <p>Artist: {piece.artist}</p>
            <Image
              src={piece.imageSource}
              alt={piece.name}
              width={500}
              height={500}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
