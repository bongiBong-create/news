import { withSkeleton } from "../../helpers/hocs/withSkeleton";
import { NewsBanner } from "../NewsBanner";

import styles from "./index.module.css"

const BannerList = ({ banners }) => {
  return (
    <ul className={styles.banners}>
      {banners?.map((banner) => (
        <NewsBanner key={banner.id} item={banner} />
      ))}
    </ul>
  );
};

export const BannerListWithSkeleton = withSkeleton(BannerList, "banner", 10, "row") 
