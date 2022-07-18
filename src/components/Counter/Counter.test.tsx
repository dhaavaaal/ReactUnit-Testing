import { fireEvent, render, screen } from "@testing-library/react";
import { Counter } from "./Counter";

it("defaultCount = 0, then counter = 1", () => {
  render(<Counter defaultCount={0} description="My Counter" />);
  //This is recommended way.For readability purposes usually we just do this expect('This bit') to be in the document
  expect(screen.getByText("Current Count: 0")).toBeInTheDocument();
  //you can keep it like this
  expect(screen.getByText(/my counter/i)).toBeInTheDocument();
});

it("defaultCount = 0, and + clicked then counter = 1", () => {
  render(<Counter defaultCount={0} description="My Counter" />);
  fireEvent.click(screen.getByRole("button", { name: "+" }));
  expect(screen.getByText("Current Count: 1")).toBeInTheDocument();
});

it.todo("defaultCount = 0, and - clicked then counter = -1");
