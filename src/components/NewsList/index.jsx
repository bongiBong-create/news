import { NewsItem } from "../NewsItem";
import styles from "./index.module.css";

export const NewsList = ({ news }) => {
  return (
    <ul className={styles.list}>
      {news.map((item) => (
        <NewsItem key={item.id} item={item} />
      ))}
    </ul>
  );
};
