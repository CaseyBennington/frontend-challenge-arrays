import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Button from "./Button";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders a styled button component", () => {
  act(() => {
    render(<Button />, container);
  });
  let containerStyles = getComputedStyle(container.querySelector("Button"));
  expect(containerStyles).toHaveProperty("background", "blue");

  act(() => {
    render(<Button actionBtn="true" />, container);
  });
  let containerStyles2 = getComputedStyle(container.querySelector("Button"));
  expect(containerStyles2).toHaveProperty("background", "lightgrey");
});
