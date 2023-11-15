import Image from "next/image";
import Link from "next/link";

export function ArtPiecesDetails({ image, name, artist, year, genre }) {
  return (
    <>
      <h1> {artist} </h1>
      <h2> {name} </h2>
      <Image src={image} alt={name} width={500} height={500} />
      <h4> {genre} </h4>
      <h3> {year} </h3>
      <Link href="/art-pieces"> See full list </Link>
    </>
  );
}
