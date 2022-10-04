import { classNames } from "./classNames";

describe("classNames", () => {
  test("test with only first class", () => {
    expect(classNames("someClass")).toBe("someClass");
  });

  test("test with additional classes", () => {
    expect(classNames("someClass", {}, ["class1", "class2"])).toBe(
      "someClass class1 class2"
    );
  });

  test("with mods", () => {
    const expected = "someClass class1 class2 hovered scrollable";
    expect(
      classNames("someClass", { hovered: true, scrollable: true }, [
        "class1",
        "class2",
      ])
    ).toBe(expected);
  });

  test("test with 1 mode true and 1 md fasle", () => {
    expect(
      classNames("someClass", { hovered: true, scrollable: false }, [
        "class1",
        "class2",
      ])
    ).toBe("someClass class1 class2 hovered");
  });

  test("test with 1 mode true and 1 md fasle", () => {
    expect(
      classNames("someClass", { hovered: true, scrollable: undefined }, [
        "class1",
        "class2",
      ])
    ).toBe("someClass class1 class2 hovered");
  });
});
