import { PAGE_SIZE, TOTAL_PAGE } from "../../constants/constant";
import { useFilters } from "../../helpers/hooks/useFilters";
import { useDebounce } from "../../helpers/hooks/useDebounce";
import { useFetch } from "../../helpers/hooks/useFetch";
import { getNews } from "../../api/apiNews";

import { NewsListWithSkeleton } from "../NewsList";
import { NewsFilters } from "../NewsFilters";
import PaginationWrapper from "../PaginationWrapper";

import styles from "./index.module.css";

export const NewsByFilters = () => {
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

      <PaginationWrapper
        top
        bottom
        currentPage={filters.page_number}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        handlePageClick={handlePageClick}
        totalPage={TOTAL_PAGE}
      >
        <NewsListWithSkeleton isLoading={isLoading} news={data?.news} />
      </PaginationWrapper>
    </section>
  );
};
