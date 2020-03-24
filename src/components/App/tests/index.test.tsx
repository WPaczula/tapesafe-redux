import React from "react";
import { render } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  it("should call load users if they are not loaded.", () => {
    const loadUsers = jest.fn() as () => void;

    render(<App loadUsers={loadUsers} users={undefined} loading={true} />);

    expect(loadUsers).toHaveBeenCalledTimes(1);
  });
});
