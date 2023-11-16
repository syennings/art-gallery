import { Spotlight } from "@/components/Spotlight";

export default function SpotlightPage({
  slug,
  artist,
  image,
  onToggleFavorite,
  artPiecesInfo,
}) {
  return (
    <div>
      <h1>Hello from Next.js</h1>
      <Spotlight
        onToggleFavorite={onToggleFavorite}
        artist={artist}
        image={image}
        slug={slug}
      ></Spotlight>
    </div>
  );
}
