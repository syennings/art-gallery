export function Comments({ comments }) {
  console.log("received comments:", comments);
  return (
    <>
      <h2>Past Comments</h2>

      <ul>
        {comments.map((comment, index) => (
          <li key={index}>
            <p> {comment} </p>
          </li>
        ))}
      </ul>
    </>
  );
}
