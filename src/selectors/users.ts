import { createSelector } from "reselect";
import { Store } from "reducers";
import { IUsersState } from "reducers/users";
import { IUser } from "interfaces/users";

const selectUserState = (store: Store): IUsersState => store.users;

export const selectUsers = createSelector(
  selectUserState,
  (userState: IUsersState): Array<IUser> | undefined => userState.users
);

export const selectLoading = createSelector(
  selectUserState,
  (userState: IUsersState): boolean => userState.loading
);
