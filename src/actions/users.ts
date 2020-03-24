import {
  LoadUsersRequestedAction,
  LoadUsersSuccessAction,
  LoadUsersFailureAction,
  UsersAction
} from "actions/types/users";
import {
  LOAD_USERS_REQUESTED,
  LOAD_USERS_SUCCESS,
  LOAD_USERS_FAILURE
} from "actions/constatns/users";
import { IUser } from "interfaces/users";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { IUsersState } from "reducers/users";
import Api from "api";

export const loadUsersRequested = (): LoadUsersRequestedAction => ({
  type: LOAD_USERS_REQUESTED
});

export const loadUsersSuccess = (
  users: Array<IUser>
): LoadUsersSuccessAction => ({
  type: LOAD_USERS_SUCCESS,
  payload: users
});

export const loadUsersFailure = (error: Error): LoadUsersFailureAction => ({
  type: LOAD_USERS_FAILURE,
  error
});

export const loadUsers = (): ThunkAction<
  void,
  IUsersState,
  Api,
  UsersAction
> => {
  return async (
    dispatch: ThunkDispatch<IUsersState, Api, UsersAction>,
    getState: () => IUsersState,
    api: Api
  ) => {
    dispatch(loadUsersRequested());
    try {
      const response = await api.getUsers();

      dispatch(loadUsersSuccess(response.data.results));
    } catch (error) {
      dispatch(loadUsersFailure(error));
    }
  };
};
