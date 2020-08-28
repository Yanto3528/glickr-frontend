import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ImageList from "./";
import { images } from "../../testData/";

const setup = (props = {}) => {
  const setCurrentIndexMock = jest.fn();
  render(<ImageList {...props} setCurrentImageIndex={setCurrentIndexMock} />);
  return { setCurrentIndexMock };
};

test("renders correctly", () => {
  setup({
    title: "Recent",
    images,
    loading: false,
  });
  const title = screen.getByText(/recent/i);
  const imageList = screen.getAllByRole("img");
  expect(title).toBeInTheDocument();
  expect(imageList.length).toBe(images.length);
});

test("renders empty message when images length is 0", () => {
  setup({
    title: "Recent",
    images: [],
    loading: false,
  });
  const emptyMsg = screen.getByText(/no images/i);
  expect(emptyMsg).toBeInTheDocument();
});

test("call setCurrentImageIndex when user clicks on a image", () => {
  const { setCurrentIndexMock } = setup({
    title: "Recent",
    images,
    loading: false,
  });
  const imageList = screen.getAllByRole("img");
  fireEvent.click(imageList[0]);
  expect(setCurrentIndexMock).toHaveBeenCalledTimes(1);
  expect(setCurrentIndexMock).toHaveBeenCalledWith(0);
});
