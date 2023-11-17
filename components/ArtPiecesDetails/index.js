import Image from "next/image";
import Link from "next/link";
import { FavoriteButton } from "../FavoriteButton";
import { CommentForm } from "../CommentForm";
import { Comments } from "../Comments";

export function ArtPiecesDetails({
  image,
  name,
  artist,
  year,
  genre,
  artPiecesInfo,
  isFavorite,
  slug,
  onToggleFavorite,
  onHandleComment,
  comments,
}) {
  console.log("toggle detaisls", onToggleFavorite);
  console.log("onHandleComment", onHandleComment);
  console.log("comment", comments);

  return (
    <>
      <h1> {artist} </h1>
      <h2> {name} </h2>
      <Image src={image} alt={name} width={500} height={500} />
      <h4> {genre} </h4>
      <h3> {year} </h3>
      <Link href="/art-pieces"> See full list </Link>
      <FavoriteButton
        artPiecesInfo={artPiecesInfo}
        isFavorite={isFavorite}
        slug={slug}
        onToggleFavorite={onToggleFavorite}
      ></FavoriteButton>
      {comments && <Comments comments={comments} />}
      <CommentForm
        onHandleComment={onHandleComment}
        comments={comments}
        slug={slug}
      ></CommentForm>
    </>
  );
}
