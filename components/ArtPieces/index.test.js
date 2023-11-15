import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ArtPieces } from ".";

test("renders a name of artpiece", () => {
  render(<ArtPieces name="Blue and Red" />);

  //   const artPieces = screen.getAllByRole("listitem");
  const artPieceHeading = screen.getByRole("heading", {
    name: "Blue and Red",
  });

  expect(artPieceHeading).toBeInTheDocument();
});
