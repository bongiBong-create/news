import { getLatestNews } from "../../api/apiNews";
import { useFetch } from "../../helpers/hooks/useFetch";

import { BannerListWithSkeleton } from "../bannerList";

import styles from "./index.module.css";

const LatestNews = () => {
  const { data, isLoading } = useFetch(getLatestNews);

  return (
    <section className={styles.section}>
      <BannerListWithSkeleton banners={data?.news} isLoading={isLoading} />
    </section>
  );
};

export default LatestNews;
