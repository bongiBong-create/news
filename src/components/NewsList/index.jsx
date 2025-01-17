import { withSkeleton } from "../../helpers/hocs/withSkeleton";
import { NewsItem } from "../NewsItem";

import styles from "./index.module.css";

const NewsList = ({ news }) => {
  return (
    <ul className={styles.list}>
      {news.map((item) => (
        <NewsItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export const NewsListWithSkeleton = withSkeleton(NewsList, "item", 10);
