import { BannerListWithSkeleton } from "../bannerList";
import styles from "./index.module.css";

export const LatestNews = ({ banners, isLoading }) => {
  return (
    <section className={styles.section}>
      <BannerListWithSkeleton banners={banners} isLoading={isLoading} />
    </section>
  );
};
