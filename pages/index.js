import { Spotlight } from "@/components/Spotlight";

export default function SpotlightPage({
  slug,
  artist,
  image,
  onToggleFavorite,
  artPiecesInfo,
  onHandleComment,
  comments,
}) {
  console.log("slug", slug);

  return (
    <div>
      <Spotlight
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={onToggleFavorite}
        artist={artist}
        image={image}
        slug={slug}
        onHandleComment={onHandleComment}
        comments={comments}
      ></Spotlight>
    </div>
  );
}
