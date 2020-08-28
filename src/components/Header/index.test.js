import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./";

test("render header component", () => {
  render(<Header />);
  const logo = screen.getByText(/glickr/i);
  expect(logo).toBeInTheDocument();
});
