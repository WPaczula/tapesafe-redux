import {
  LOAD_USERS_REQUEST,
  LOAD_USERS_SUCCESS,
  LOAD_USERS_FAILURE
} from "features/users/actions/types";
import { User } from "models/user";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { UsersState } from "features/users/types";
import Api from "features/users/api";
import { createAsyncAction, ActionType } from "typesafe-actions";

export const loadUsersAction = createAsyncAction(
  LOAD_USERS_REQUEST,
  LOAD_USERS_SUCCESS,
  LOAD_USERS_FAILURE
)<undefined, User[], Error>();

export const loadUsers = (): ThunkAction<
  void,
  UsersState,
  Api,
  UsersAction
> => {
  return async (
    dispatch: ThunkDispatch<UsersState, Api, UsersAction>,
    getState: () => UsersState,
    api: Api
  ) => {
    dispatch(loadUsersAction.request());
    try {
      const response = await api.getUsers();

      dispatch(loadUsersAction.success(response.data.results));
    } catch (error) {
      dispatch(loadUsersAction.failure(error));
    }
  };
};

export type UsersAction = ActionType<typeof loadUsersAction>;

export type LoadUsersAction = typeof loadUsers;
