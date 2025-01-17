import { formatDate } from "../../helpers/formatDate";

import styles from "./index.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>NEWS</h1>
      <p className={styles.date}>{formatDate(new Date())}</p>
    </header>
  );
};
