import { fireEvent, render, screen } from "@testing-library/react";
import { componentRender } from "shared/config/tests/conponentRender/componentRender";
import { renderWithTranslation } from "shared/config/tests/renderWithTranslation/renderWithTranslation";
import { SideBar } from "./SideBar";

describe("SibeBar", () => {
  test("render SideBar", () => {
    componentRender(<SideBar />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });

  test("test toggle", () => {
    componentRender(<SideBar />);
    const toggleBtn = screen.getByTestId("sidebar-toggle");
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
  });
});
