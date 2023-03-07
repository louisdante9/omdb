/* eslint-disable no-undef */
import { render } from "@testing-library/react";
import { Skeleton } from "./Skeleton";

test("renders correctly", () => {
  const { container } = render(<Skeleton />);
  expect(container.firstChild).toBeInTheDocument();
});
