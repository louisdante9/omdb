/* eslint-disable no-undef */
import { render } from "@testing-library/react";
import { MovieInfo } from "./MovieInfo";

const movieInfo = {
  closePop: jest.fn(),
  Poster: "https://wwww/goggle.com/m/uggugufsfd",
  Title: "The Boss",
  Country: "usa",
  Year: "1990",
  Rated: "pg",
  Genre: "action",
  Plot: "this is a test",
  Production: "N/A",
  Runtime: "137 mins",
  imdbRating: "7.8",
  Director: "john doe",
  Actors: "louis erike",
  BoxOffice: "1234445",
};
test("renders correctly", () => {
  const { queryByText } = render(<MovieInfo {...movieInfo} />);
  expect(queryByText(/The Boss/i)).toBeInTheDocument();
  expect(queryByText(/action/i)).toBeInTheDocument();
});
