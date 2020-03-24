import usersReducer, { IUsersState } from "./users";
import { UsersAction } from "actions/types/users";
import { combineReducers, Reducer } from "redux";

export interface Store {
  users: IUsersState;
}

export type Action = UsersAction;

const reducers: Reducer<Store, Action> = combineReducers({
  users: usersReducer
});

export default reducers;
