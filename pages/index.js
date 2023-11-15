import useSWR from "swr";
import { ArtPieces } from "@/components/ArtPieces";
import { Spotlight } from "@/components/Spotlight";

const URL = "https://example-apis.vercel.app/api/art";

export default function HomePage() {
  const { data, error, isLoading } = useSWR(URL);

  console.log(data);

  if (error) return <div> failed to load</div>;
  if (isLoading) return <div> is loading ....</div>;

  function getRandomImage(data) {
    return data[Math.floor(Math.random() * data.length)];
  }
  const randomImage = getRandomImage(data);
  console.log("randomImage", randomImage);

  return (
    <div>
      <Spotlight
        artist={randomImage.artist}
        image={randomImage.imageSource}
      ></Spotlight>
      <h1>Hello from Next.js</h1>
      <ArtPieces pieces={data}> Testing the art pieces </ArtPieces>
    </div>
  );
}
