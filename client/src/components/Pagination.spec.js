import { render } from "@testing-library/react";
import Pagination from "./Pagination";

afterEach(() => {
  jest.clearAllMocks();
  jest.resetAllMocks();
});

describe("Pagination", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <Pagination
        pageNumber={10}
        onChangePageNumber={() => {}}
        disabled={false}
        noMoreData={false}
      />
    );
    expect(baseElement).toMatchSnapshot();
  });
});
