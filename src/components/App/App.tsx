import React from "react";
import List from "components/List";
import { IUser } from "interfaces/users";
import styles from "./styles.module.scss";

interface IAppProps {
  loadUsers(): void;
  users: Array<IUser> | undefined;
  loading: boolean;
}

const App: React.FunctionComponent<IAppProps> = ({
  loadUsers,
  users,
  loading
}) => {
  React.useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  return (
    <div className={styles["app"]}>
      {users === undefined || loading ? (
        <div>Loading...</div>
      ) : (
        <List users={users} />
      )}
    </div>
  );
};

export default App;
