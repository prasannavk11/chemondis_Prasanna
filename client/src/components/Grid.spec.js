import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import Grid from "./Grid";

afterEach(() => {
  jest.clearAllMocks();
  jest.resetAllMocks();
});

describe("Grid", () => {
  it("should render successfully", () => {
    const mockData = { id: 1, title: "test", username: "test" };
    const { baseElement } = render(<Grid type="album" data={mockData} />, {
      wrapper: MemoryRouter,
    });
    expect(baseElement).toMatchSnapshot();
  });
});
