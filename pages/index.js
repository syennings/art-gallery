import useSWR from "swr";
import { ArtPieces } from "@/components/ArtPieces";

const URL = "https://example-apis.vercel.app/api/art";

export default function HomePage() {
  const { data, error, isLoading } = useSWR(URL);

  console.log(data);

  if (error) return <div> failed to load</div>;
  if (isLoading) return <div> is loading ....</div>;

  return (
    <div>
      <h1>Hello from Next.js</h1>
      <ArtPieces pieces={data}> Testing the art pieces </ArtPieces>
    </div>
  );
}
