import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import Photos from "./Photos";

afterEach(() => {
  jest.clearAllMocks();
  jest.resetAllMocks();
});

describe("Photos", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Photos />, {
      wrapper: MemoryRouter,
    });
    expect(baseElement).toMatchSnapshot();
  });
});
