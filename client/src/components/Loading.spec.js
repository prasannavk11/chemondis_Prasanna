import { render } from "@testing-library/react";
import Loading from "./Loading";

afterEach(() => {
  jest.clearAllMocks();
  jest.resetAllMocks();
});

describe("Loading", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Loading />);
    expect(baseElement).toMatchSnapshot();
  });
});
