import { IUser } from "interfaces/users";
import {
  LOAD_USERS_REQUESTED,
  LOAD_USERS_SUCCESS,
  LOAD_USERS_FAILURE
} from "actions/constatns/users";
import { ThunkAction } from "redux-thunk";
import { IUsersState } from "reducers/users";
import Api from "api";

export interface LoadUsersRequestedAction {
  type: typeof LOAD_USERS_REQUESTED;
}

export interface LoadUsersSuccessAction {
  type: typeof LOAD_USERS_SUCCESS;
  payload: Array<IUser>;
}

export interface LoadUsersFailureAction {
  type: typeof LOAD_USERS_FAILURE;
  error: Error;
}

export type LoadUsersAction = ThunkAction<void, IUsersState, Api, UsersAction>;

export type UsersAction =
  | LoadUsersRequestedAction
  | LoadUsersSuccessAction
  | LoadUsersFailureAction;
