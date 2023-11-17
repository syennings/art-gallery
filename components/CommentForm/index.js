export function CommentForm({ onHandleComment, slug }) {
  function handleSubmit(event) {
    event.preventDefault();
    const { comment } = event.target.elements;
    onHandleComment(slug, comment.value);
    event.target.reset();
  }

  return (
    <>
      <h3> Comments </h3>
      <form onSubmit={handleSubmit} slug={slug}>
        <label>
          Add a Comment Here:
          <textarea type="text" name="comment" />
        </label>
        <button type="submit" value="submit">
          Submit
        </button>
      </form>
    </>
  );
}
