import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {render, screen} from "@testing-library/react"
import Header from "./Header"
import '@testing-library/jest-dom/extend-expect';

describe("Emoji tests", ()=>{
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});

test("render text", ()=>{
  render(<Header/>);
  const headerText = screen.getByText(/Emoji Search/i);
  expect(headerText).toBeInTheDocument()
});
beforeAll(()=>{
  test("render list", () => {
  render(<App />);
  const items = screen.getAllByTestId("row");
  expect(items.length).toEqual(20);
  })
})
test("render filter", () => {
  render(<App />);
  const inputText = screen.getByText("smile");
  expect(inputText).toBeInTheDocument("smile");
});
test("click copy", () => {
  render(<App />);
  const clicks = screen.getAllByTestId("row");
  expect(clicks[0]).toHaveAttribute("data-clipboard-text");
});
})