import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Searchbar from "./";

test("renders correctly", () => {
  const searchMock = jest.fn();
  render(<Searchbar search={searchMock} />);

  const input = screen.getByRole("textbox");
  const searchIcon = screen.getByTestId("search-icon");
  expect(input).toBeInTheDocument();
  expect(searchIcon).toBeInTheDocument();
});

test("render correct value when user typing something", () => {
  const searchMock = jest.fn();
  render(<Searchbar search={searchMock} />);

  const input = screen.getByRole("textbox");
  fireEvent.change(input, {
    target: { value: "cat" },
  });
  expect(input.value).toBe("cat");
});

test("call search function when user submit the form", () => {
  const searchMock = jest.fn();
  render(<Searchbar search={searchMock} />);

  const input = screen.getByRole("textbox");
  const form = screen.getByTestId("form");
  fireEvent.change(input, {
    target: { value: "cat" },
  });
  fireEvent.submit(form);
  expect(searchMock).toHaveBeenCalledTimes(1);
  expect(searchMock).toHaveBeenCalledWith("cat");
  expect(input.value).toBe("");
});

test("doesn't call search function when user submit an empty form input", () => {
  const searchMock = jest.fn();
  render(<Searchbar search={searchMock} />);

  const form = screen.getByTestId("form");
  fireEvent.submit(form);
  expect(searchMock).toHaveBeenCalledTimes(0);
});
