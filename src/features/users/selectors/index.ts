import { createSelector } from "reselect";
import { User } from "models/user";
import { RootState } from "store";
import { UsersState } from "features/users/types";

const selectUserState = (store: RootState): UsersState => store.users;

export const selectUsers = createSelector(
  selectUserState,
  (userState: UsersState): Array<User> | undefined => userState.users
);

export const selectLoading = createSelector(
  selectUserState,
  (userState: UsersState): boolean => userState.loading
);
