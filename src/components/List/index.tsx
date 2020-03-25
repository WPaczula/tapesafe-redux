import * as React from "react";
import { User } from "models/user";
import styles from "./styles.module.scss";

interface IListProps {
  users: Array<User>;
}

const List: React.FunctionComponent<IListProps> = ({ users }) => {
  return (
    <ul className={styles["list"]}>
      {users.map(u => (
        <li className={styles["list__item"]} key={u.id.value}>
          <img
            className={styles["list__image"]}
            src={u.picture.thumbnail}
            alt={u.name.first}
          />
          <div className={styles["list__user-data"]}>
            <p
              className={styles["list__user-name"]}
            >{`${u.name.first} ${u.name.last}`}</p>
            <p className={styles["list__user-email"]}>{u.email}</p>
            <p className={styles["list__user-phone"]}>{u.phone}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default List;
