import GlobalStyle from "../styles";
import { Layout } from "@/components/Layout";
import useSWR from "swr";
import { useImmerLocalStorageState } from "@/public/resources_gallery/lib/hook/useImmerLocalStorageState";
import useLocalStorageState from "use-local-storage-state";
import { useEffect, useState } from "react";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const URL = "https://example-apis.vercel.app/api/art";

export default function App({ Component, pageProps }) {
  const { data, error, isLoading } = useSWR(URL, fetcher);

  const [artPiecesInfo, setArtPiecesInfo] = useLocalStorageState("art-info", {
    defaultValue: [],
  });
  const [randomImg, setRandomImg] = useState();

  console.log("artPiecesInfo", artPiecesInfo);
  function handleToggleFavorite(slug) {
    const artPiece = artPiecesInfo?.find((piece) => piece.slug === slug);
    if (artPiece) {
      setArtPiecesInfo(
        artPiecesInfo.map((pieceInfo) =>
          pieceInfo.slug === slug
            ? { slug, isFavorite: !pieceInfo.isFavorite }
            : pieceInfo
        )
      );
    } else {
      setArtPiecesInfo([...artPiecesInfo, { slug, isFavorite: true }]);
    }
  }
  function getRandomImage(data) {
    return data[Math.floor(Math.random() * data.length)];
  }
  useEffect(() => {
    if (data) {
      const random = getRandomImage(data);
      console.log(random);
      setRandomImg(random);
    }
  }, [data]);

  if (error) return <div> failed to load</div>;
  if (isLoading) return <div> is loading ........</div>;

  // const randomImage = getRandomImage(data);
  console.log("randomImg", randomImg);

  return (
    <>
      <GlobalStyle />
      <Layout />
      <Component
        {...pageProps}
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={handleToggleFavorite}
        pieces={data}
        image={randomImg?.imageSource}
        artist={randomImg?.artist}
      />
    </>
  );
}
