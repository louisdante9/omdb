/* eslint-disable no-undef */
import { fireEvent, render } from "@testing-library/react";
import { Button } from "./Button";

const mockOnclick = jest.fn();

test("renders correctly", () => {
  const { queryAllByText } = render(<Button handleClick={mockOnclick}>search</Button>);
  expect(queryAllByText(/search/i)[0]).toBeInTheDocument();
  const button = queryAllByText(/search/i)[0];
  fireEvent.click(button);

  expect(mockOnclick).toHaveBeenCalledTimes(1);
});
