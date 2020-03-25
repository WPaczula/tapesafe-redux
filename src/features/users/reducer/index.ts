import { createReducer } from "typesafe-actions";
import {
  LOAD_USERS_REQUEST,
  LOAD_USERS_SUCCESS,
  LOAD_USERS_FAILURE
} from "features/users/actions/types";
import { UsersAction } from "features/users/actions";
import { UsersState } from "features/users/types";

const initialState: UsersState = {
  users: undefined,
  loading: false,
  error: undefined
};

const reducer = createReducer<UsersState, UsersAction>(initialState, {
  [LOAD_USERS_REQUEST]: state => ({ ...state, loading: true }),
  [LOAD_USERS_SUCCESS]: (state, action) => ({
    ...state,
    users: action.payload,
    loading: false
  }),
  [LOAD_USERS_FAILURE]: (state, action) => ({
    ...state,
    error: action.payload,
    loading: false
  })
});

export default reducer;
