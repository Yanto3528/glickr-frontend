import React from "react";
import { render, screen } from "@testing-library/react";

import MainTitle from "./";

test("renders correctly", () => {
  render(<MainTitle title="The best image source on the internet" />);
  const logo = screen.getByText(/glickr/i);
  const title = screen.getByText(/image/);
  expect(logo).toBeInTheDocument();
  expect(title).toBeInTheDocument();
});
