import { useEffect, useState } from "react";
import { getNews } from "../../api/apiNews";

import { NewsBanner } from "../../components/NewsBanner";
import { NewsList } from "../../components/NewsList";
import { Skeleton } from "../../components/skeleton";

import styles from "./index.module.css";

export const Main = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setIsLoading(true);
        const response = await getNews();
        setNews((prev) => [...prev, ...response.news]);
        setIsLoading(false);
      } catch (e) {
        console.log(e);
      }
    };

    fetchNews();
  }, []);

  return (
    <main className={styles.main}>
      {news.length > 0 && !isLoading ? (
        <NewsBanner item={news[0]} />
      ) : (
        <Skeleton type="banner" count={1} />
      )}

      {!isLoading ? (
        <NewsList news={news} />
      ) : (
        <Skeleton type="item" count={10} />
      )}
    </main>
  );
};
