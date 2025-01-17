import { useEffect, useState } from "react";
import { getNews } from "../../api/apiNews";

import { NewsBanner } from "../../components/NewsBanner";

import styles from "./index.module.css";
import { NewsList } from "../../components/NewsList";

export const Main = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await getNews();
        setNews((prev) => [...prev, ...response.news]);
      } catch (e) {
        console.log(e);
      }
    };

    fetchNews();
  }, []);

  return (
    <main className={styles.main}>
      {news.length > 0 ? <NewsBanner item={news[0]} /> : null}
      <NewsList news={news} />
    </main>
  );
};
