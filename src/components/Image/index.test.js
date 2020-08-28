import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Image from "./";
import { images } from "../../testData/index";

const setup = (index) => {
  const nextMock = jest.fn();
  const prevMock = jest.fn();
  const onCloseMock = jest.fn();
  render(
    <Image
      images={images}
      index={index}
      next={nextMock}
      prev={prevMock}
      onClose={onCloseMock}
    />
  );
  return { nextMock, prevMock, onCloseMock };
};

test("render the image based on index", () => {
  const index = 1;
  setup(index);
  const image = screen.getByRole("img");
  expect(image).toBeInTheDocument();
  expect(image.getAttribute("src")).toBe(images[index].imageUrl);
});

test("call prev function when user click on left arrow", () => {
  const index = 1;
  const { prevMock } = setup(index);
  const prevIcon = screen.getByTestId("prev");
  fireEvent.click(prevIcon);
  expect(prevMock).toHaveBeenCalledTimes(1);
});

test("call next function when user click on right arrow", () => {
  const index = 1;
  const { nextMock } = setup(index);
  const nextIcon = screen.getByTestId("next");
  fireEvent.click(nextIcon);
  expect(nextMock).toHaveBeenCalledTimes(1);
});

test("call onClose function when user click on close icon", () => {
  const index = 1;
  const { onCloseMock } = setup(index);
  const closeIcon = screen.getByTestId("close");
  fireEvent.click(closeIcon);
  expect(onCloseMock).toHaveBeenCalledTimes(1);
});

test("call onClose function when user click on backdrop", () => {
  const index = 1;
  const { onCloseMock } = setup(index);
  const backdrop = screen.getByTestId("backdrop");
  fireEvent.click(backdrop);
  expect(onCloseMock).toHaveBeenCalledTimes(1);
});
