export const LOAD_USERS_REQUEST = "users/LOAD_USERS_REQUEST";
export const LOAD_USERS_SUCCESS = "users/LOAD_USERS_SUCCESS";
export const LOAD_USERS_FAILURE = "users/LOAD_USERS_FAILURE";

export type UsersActionTypes =
  | typeof LOAD_USERS_REQUEST
  | typeof LOAD_USERS_SUCCESS
  | typeof LOAD_USERS_FAILURE;
