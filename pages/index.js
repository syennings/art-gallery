import useSWR from "swr";

const URL = "https://example-apis.vercel.app/api/art";

export default function HomePage() {
  const { data, error, isLoading } = useSWR(URL);
  console.log(data);
  return (
    <div>
      <h1>Hello from Next.js</h1>
    </div>
  );
}
