import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import NoPage from "./NoPage";

afterEach(() => {
  jest.clearAllMocks();
  jest.resetAllMocks();
});

describe("NoPage", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<NoPage />, {
      wrapper: MemoryRouter,
    });
    expect(baseElement).toMatchSnapshot();
  });
});
