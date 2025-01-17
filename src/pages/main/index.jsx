import { useEffect, useState } from "react";
import { getCategories, getNews } from "../../api/apiNews";

import { NewsBanner } from "../../components/NewsBanner";
import { NewsList } from "../../components/NewsList";
import { Skeleton } from "../../components/skeleton";
import { Pagination } from "../../components/pagination";

import styles from "./index.module.css";
import { Categories } from "../../components/category";

export const Main = () => {
  const [news, setNews] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPage = 10;
  const pageSize = 10;

  const fetchNews = async (currentPage) => {
    try {
      setIsLoading(true);
      const response = await getNews({
        page_number: currentPage,
        page_size: pageSize,
        category: selectedCategory === "All" ? null : selectedCategory,
      });
      setNews([...response.news]);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await getCategories();
      setCategories(["All", ...response.categories]);
    } catch (e) {
      console.log(e);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchNews(currentPage);
  }, [currentPage, selectedCategory]);

  return (
    <main className={styles.main}>
      <Categories
        categories={categories}
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />
      {news.length > 0 && !isLoading ? (
        <NewsBanner item={news[0]} />
      ) : (
        <Skeleton type="banner" count={1} />
      )}

      <Pagination
        currentPage={currentPage}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        handlePageClick={handlePageClick}
        totalPage={totalPage}
      />

      {!isLoading ? (
        <NewsList news={news} />
      ) : (
        <Skeleton type="item" count={10} />
      )}

      <Pagination
        currentPage={currentPage}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        handlePageClick={handlePageClick}
        totalPage={totalPage}
      />
    </main>
  );
};
