import React from "react";
import { render } from "@testing-library/react";
import App from "..";

describe("App", () => {
  it("should render without an error", () => {
    render(<App />);
  });
});
