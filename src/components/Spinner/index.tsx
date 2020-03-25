import * as React from "react";
import styles from "./styles.module.scss";

interface ISpinnerProps {}

const Spinner: React.FunctionComponent<ISpinnerProps> = props => {
  return (
    <div className={styles["spinner"]}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Spinner;
