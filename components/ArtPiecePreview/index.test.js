import { render, screen, waitFor } from "@testing-library/react";
import { ArtPiecePreview } from ".";

test("renders a name of artpiece", async () => {
  const mockTitle = "Blue and Red";
  render(<ArtPiecePreview title={mockTitle} artist="Some Artist" />);

  const titleElement = screen.getByRole("heading", {
    level: 2,
    name: mockTitle,
  });

  expect(titleElement).toBeInTheDocument();
});
