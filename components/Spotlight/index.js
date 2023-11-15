import Image from "next/image";
export function Spotlight({ image, artist }) {
  return (
    <>
      <Image src={image} alt={artist} width={200} height={200} />
    </>
  );
}
