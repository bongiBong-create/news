import { NewsByFilters } from "../../components/NewsByFilters";

import styles from "./index.module.css";
import LatestNews from "../../components/LatesNews";

export const Main = () => {
  return (
    <main className={styles.main}>
      <LatestNews />
      <NewsByFilters />
    </main>
  );
};
