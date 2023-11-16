import { render, screen } from "@testing-library/react";
import { ArtPieces } from "./ArtPieces";

// Mock art pieces data for testing
const mockArtPieces = [
  {
    slug: "blue-and-red",
    artist: "Some Artist",
    name: "Blue and Red",
    imageSource: "/path/to/blue-and-red.jpg",
  },
  // Add more art pieces as needed
];

test("renders all art pieces as a list", () => {
  render(<ArtPieces pieces={mockArtPieces} />);

  // Check if each art piece is rendered in the document
  mockArtPieces.forEach((piece) => {
    const artPieceTitle = screen.getByRole("heading", { name: piece.name });
    const artPieceImage = screen.getByAltText(piece.name);

    expect(artPieceTitle).toBeInTheDocument();
    expect(artPieceImage).toBeInTheDocument();
  });
});
