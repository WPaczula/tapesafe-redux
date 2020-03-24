import React from "react";
import List from "components/List";
import { IUser } from "interfaces/users";
import Api from "api";
import styles from "./styles.module.scss";

const api = new Api();

function App() {
  const [users, setUsers] = React.useState<Array<IUser> | undefined>();

  React.useEffect(() => {
    async function getUsers() {
      const users = await api.getUsers();
      setUsers(users.data.results);
    }

    getUsers();
  }, []);

  return (
    <div className={styles["app"]}>
      {users === undefined ? <div>Loading...</div> : <List users={users} />}
    </div>
  );
}

export default App;
