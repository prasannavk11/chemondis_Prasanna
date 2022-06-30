import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import Albums from "./Albums";

afterEach(() => {
  jest.clearAllMocks();
  jest.resetAllMocks();
});

describe("Albums", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Albums />, {
      wrapper: MemoryRouter,
    });
    expect(baseElement).toMatchSnapshot();
  });
});
