import { Spotlight } from "@/components/Spotlight";

export default function SpotlightPage({ artist, image }) {
  return (
    <div>
      <h1>Hello from Next.js</h1>
      <Spotlight artist={artist} image={image}></Spotlight>
    </div>
  );
}
