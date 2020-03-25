import React from "react";
import List from "components/List";
import Spinner from "components/Spinner";
import { User } from "models/user";
import styles from "./styles.module.scss";

interface IAppProps {
  loadUsers(): void;
  users: Array<User> | undefined;
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
      {users === undefined || loading ? <Spinner /> : <List users={users} />}
    </div>
  );
};

export default App;
