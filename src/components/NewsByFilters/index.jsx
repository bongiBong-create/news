import { TOTAL_PAGE } from "../../constants/constant";

import { NewsListWithSkeleton } from "../NewsList";
import { NewsFilters } from "../NewsFilters";
import { Pagination } from "../pagination";

import styles from "./index.module.css";

export const NewsByFilters = ({ changeFilter, filters, isLoading, news }) => {
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
    <section className={styles.section}>
      <NewsFilters filters={filters} changeFilter={changeFilter} />
      <NewsListWithSkeleton isLoading={isLoading} news={news} />
      <Pagination
        currentPage={filters.page_number}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        handlePageClick={handlePageClick}
        totalPage={TOTAL_PAGE}
      />
    </section>
  );
};
