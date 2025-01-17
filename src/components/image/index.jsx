import styles from "./index.module.css";

export const Image = ({ image }) => {
  return (
    <div className={styles.wrapper}>
      {image ? <img src={image} alt="new" className={styles.image} /> : null}
    </div>
  );
};
