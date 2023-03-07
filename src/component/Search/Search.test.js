/* eslint-disable no-undef */
import { render, fireEvent } from "@testing-library/react";
import { Search } from "./Search";

const mockHandleChange = jest.fn();
const mockHandleSubmit = jest.fn();
const formData = {
  title: "creed",
  year: "1990",
};

test("component mounts and renders correctly", () => {
  const value = "";
  const { queryAllByText, getByDisplayValue, rerender } = render(
    <Search formData={{ ...formData, title: value }} handleChange={mockHandleChange} handldeSubmit={mockHandleSubmit} />
  );
  const button = queryAllByText(/search/i)[0];
  fireEvent.click(button);

  expect(mockHandleSubmit).toHaveBeenCalledTimes(1);
  const text = getByDisplayValue(/1990/);
  expect(text).toBeInTheDocument();
  rerender(<Search formData={formData} handleChange={mockHandleChange} handldeSubmit={mockHandleSubmit} />);
  const textInput = getByDisplayValue(/creed/);
  expect(text).toBeInTheDocument();
  expect(textInput.value).toEqual("creed");
});
