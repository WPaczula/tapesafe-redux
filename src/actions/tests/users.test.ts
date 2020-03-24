import {
  loadUsers,
  loadUsersRequested,
  loadUsersSuccess,
  loadUsersFailure
} from "../users";
import { IUsersState } from "reducers/users";

const state: IUsersState = {
  users: undefined,
  loading: false,
  error: undefined
};

describe("loadUsers", () => {
  it("should dispatch loadUsersRequest and loadUsersSuccess if api responds fine.", async () => {
    // Arrange
    const response = {
      data: {
        results: []
      }
    };
    const api = {
      getUsers: jest.fn().mockReturnValue(response)
    };

    const dispatch = jest.fn();

    // Act
    await loadUsers()(dispatch, () => state, api);

    // Assert
    expect(dispatch).toHaveBeenCalledWith(loadUsersRequested());
    expect(api.getUsers).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledWith(
      loadUsersSuccess(response.data.results)
    );
  });

  it("should dispatch loadUsersFailure action if api request fails.", async () => {
    // Arrange
    const error = new Error();
    const api = {
      getUsers: jest.fn().mockImplementation(() => {
        throw error;
      })
    };

    const dispatch = jest.fn();

    // Act
    await loadUsers()(dispatch, () => state, api);

    // Assert
    expect(api.getUsers).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledWith(loadUsersFailure(error));
  });
});
