export function ArtPieces({ pieces }) {
  return (
    <>
      <ul>
        {pieces.map((piece) => (
          <li key={piece.slug}>
            <h3>{piece.name}</h3>
            <p>Artist: {piece.artist}</p>
            {/* <img src={piece.imageSource} alt={piece.name} /> */}
          </li>
        ))}
      </ul>
    </>
  );
}
