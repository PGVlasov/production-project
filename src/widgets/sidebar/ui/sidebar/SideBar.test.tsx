import { fireEvent, render, screen } from "@testing-library/react";
import { renderWithTranslation } from "shared/lib/halpers/tests/renderWithTranslation/renderWithTranslation";
import { SideBar } from "./SideBar";

describe("SibeBar", () => {
  test("render SideBar", () => {
    renderWithTranslation(<SideBar />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });

  test("test toggle", () => {
    renderWithTranslation(<SideBar />);
    const toggleBtn = screen.getByTestId("sidebar-toggle");
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
  });
});
