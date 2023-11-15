import GlobalStyle from "../styles";

import { Layout } from "@/components/Layout";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const URL = "https://example-apis.vercel.app/api/art";

export default function App({ Component, pageProps }) {
  const { data, error, isLoading } = useSWR(URL, fetcher);

  console.log(data);

  if (error) return <div> failed to load</div>;
  if (isLoading) return <div> is loading ....</div>;

  function getRandomImage(data) {
    return data[Math.floor(Math.random() * data.length)];
  }
  const randomImage = getRandomImage(data);
  console.log("randomImage", randomImage);

  return (
    <>
      <GlobalStyle />
      <Layout />
      <Component
        {...pageProps}
        image={randomImage.imageSource}
        artist={randomImage.artist}
      />
    </>
  );
}
