import { useFetch } from "../../helpers/hooks/useFetch";
import { getNews } from "../../api/apiNews";
import { useDebounce } from "../../helpers/hooks/useDebounce";
import { PAGE_SIZE } from "../../constants/constant";
import { useFilters } from "../../helpers/hooks/useFilters";

import { LatestNews } from "../../components/LatesNews";
import { NewsByFilters } from "../../components/NewsByFilters";

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

  return (
    <main className={styles.main}>
      <LatestNews isLoading={isLoading} banners={data && data.news} />
      <NewsByFilters
        filters={filters}
        changeFilter={changeFilter}
        news={data?.news}
        isLoading={isLoading}
      />
    </main>
  );
};
