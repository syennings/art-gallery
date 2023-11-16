import { Spotlight } from "@/components/Spotlight";

export default function SpotlightPage({ artist, image, onToggleFavorite }) {
  return (
    <div>
      <h1>Hello from Next.js</h1>
      <Spotlight
        onToggleFavorite={onToggleFavorite}
        artist={artist}
        image={image}
      ></Spotlight>
    </div>
  );
}
