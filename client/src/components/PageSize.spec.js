import { render } from "@testing-library/react";
import PageSize from "./PageSize";

afterEach(() => {
  jest.clearAllMocks();
  jest.resetAllMocks();
});

describe("PageSize", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <PageSize
        sizes={[20, 30, 50]}
        count={10}
        onChangePageSize={() => {}}
        disabled={false}
      />
    );
    expect(baseElement).toMatchSnapshot();
  });
});
