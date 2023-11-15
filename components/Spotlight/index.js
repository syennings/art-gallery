import Image from "next/image";
export function Spotlight({ image, artist }) {
  return (
    <>
      <h1> A Highlight Piece From The Collection</h1>
      <Image src={image} alt={artist} width={300} height={300} />
      <h3> Name of Artist: {artist} </h3>
    </>
  );
}
