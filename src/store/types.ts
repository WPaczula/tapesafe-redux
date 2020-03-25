import { UsersActionTypes } from "features/users/actions/types";
import { UsersAction } from "features/users/actions";
import { UsersState } from "features/users/types";

export interface Store {
  users: UsersState;
}

export type ActionType = UsersActionTypes;
export type Action = UsersAction;
