/* eslint-disable no-undef */
import { render } from "@testing-library/react";
import { NotFound } from "./NotFound";

test("renders not found", () => {
  const { getByText } = render(<NotFound notFound="Movie not found!" />);
  expect(getByText(/Movie not found!/i)).toBeInTheDocument();
});
