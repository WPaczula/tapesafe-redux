import { UsersAction } from "actions/types/users";
import {
  LOAD_USERS_REQUESTED,
  LOAD_USERS_SUCCESS,
  LOAD_USERS_FAILURE
} from "actions/constatns/users";
import { IUser } from "interfaces/users";

export interface IUsersState {
  users: Array<IUser> | undefined;
  loading: boolean;
  error: Error | undefined;
}

const initialState: IUsersState = {
  users: undefined,
  loading: false,
  error: undefined
};

export default (state = initialState, action: UsersAction) => {
  switch (action.type) {
    case LOAD_USERS_REQUESTED:
      return { ...state, loading: true };
    case LOAD_USERS_SUCCESS:
      return { ...state, users: action.payload, loading: false };
    case LOAD_USERS_FAILURE:
      return { ...state, error: action.error, loading: false };
    default:
      return state;
  }
};
