import { useFetch } from "../../helpers/hooks/useFetch";
import { getCategories, getNews } from "../../api/apiNews";
import { useDebounce } from "../../helpers/hooks/useDebounce";
import { PAGE_SIZE, TOTAL_PAGE } from "../../constants/constant";
import { useFilters } from "../../helpers/hooks/useFilters";

import { NewsListWithSkeleton } from "../../components/NewsList";
import { NewsBannerWithSkeleton } from "../../components/NewsBanner";
import { Pagination } from "../../components/pagination";
import { Categories } from "../../components/category";
import { Search } from "../../components/search";

import styles from "./index.module.css";

export const Main = () => {
  const { filters, changeFilter } = useFilters({
    page_number: 1,
    page_size: PAGE_SIZE,
    category: null,
    keywords: "",
  });

  const debouncedKeywords = useDebounce(filters.keywords, 1500);

  const { data, isLoading } = useFetch(getNews, {
    ...filters,
    keywords: debouncedKeywords,
  });

  const { data: dataCategories } = useFetch(getCategories);

  const handleNextPage = () => {
    if (filters.page_number < TOTAL_PAGE) {
      changeFilter("page_number", filters.page_number + 1);
    }
  };

  const handlePrevPage = () => {
    if (filters.page_number > 1) {
      changeFilter("page_number", filters.page_number - 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    changeFilter("page_number", pageNumber);
  };

  return (
    <main className={styles.main}>
      {dataCategories ? (
        <Categories
          categories={dataCategories.categories}
          selectedCategory={filters.category}
          setSelectedCategory={(category) => changeFilter("category", category)}
        />
      ) : null}

      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) => changeFilter("keywords", keywords)}
      />

      <NewsBannerWithSkeleton
        isLoading={isLoading}
        item={data?.news.length > 0 && data.news[0]}
      />

      <Pagination
        currentPage={filters.page_number}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        handlePageClick={handlePageClick}
        totalPage={TOTAL_PAGE}
      />

      <NewsListWithSkeleton isLoading={isLoading} news={data?.news} />

      <Pagination
        currentPage={filters.page_number}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        handlePageClick={handlePageClick}
        totalPage={TOTAL_PAGE}
      />
    </main>
  );
};
