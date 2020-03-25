import usersReducer from "features/users/reducer";
import { combineReducers } from "redux";
import { StateType } from "typesafe-actions";

const rootReducer = combineReducers({
  users: usersReducer
});

export type RootState = StateType<typeof rootReducer>;
export default rootReducer;
