import { render, screen } from "@testing-library/react";
import { Button, ThemeButton } from "./Button";

describe("classNames", () => {
  test("render Button test", () => {
    render(<Button>Test</Button>);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });

  test("render Button with class", () => {
    render(<Button theme={ThemeButton.CLEAR}>Test</Button>);
    expect(screen.getByText("Test")).toHaveClass("clear");
    screen.debug();
  });
});
