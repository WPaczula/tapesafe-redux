import { User } from "models/user";

export interface UsersState {
  readonly users: User[] | undefined;
  readonly loading: boolean;
  readonly error: Error | undefined;
}
