/* eslint-disable no-undef */
import { render, fireEvent } from "@testing-library/react";
import { Movie } from "./Movie";

const mockOnclick = jest.fn();

afterEach(() => {
  jest.clearAllMocks();
});

const movieResults = {
  Poster: "https://www.test.com/m/hgufbs",
  Title: "creed",
  Year: "1990",
  Type: "action",
};
test("renders correctly", () => {
  const { queryByTestId, container } = render(<Movie movieResults={movieResults} onclick={mockOnclick} />);
  const movieCard = queryByTestId("movie-card");
  expect(movieCard).toBeInTheDocument();
  fireEvent.click(container.querySelector(".card"));
  expect(mockOnclick).toHaveBeenCalledTimes(1);
});
test("renders correctly", () => {
  const { queryByTestId, rerender } = render(
    <Movie movieResults={{ ...movieResults, Poster: "N/A" }} onclick={mockOnclick} />
  );
  const fallbackImg = queryByTestId("fallback-image");
  expect(fallbackImg).toBeInTheDocument();
  rerender(<Movie movieResults={movieResults} onclick={mockOnclick} />);
  const movieImage = queryByTestId("loaded-image");
  expect(movieImage).toBeInTheDocument();
});
