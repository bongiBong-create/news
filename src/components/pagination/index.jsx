import styles from "./index.module.css";

export const Pagination = ({
  totalPage,
  currentPage,
  handleNextPage,
  handlePrevPage,
  handlePageClick,
}) => {
  return (
    <div className={styles.pagination}>
      <button
        disabled={currentPage <= 1}
        onClick={handlePrevPage}
        className={styles.arrow}
      >
        {"<"}
      </button>
      <div className={styles.list}>
        {[...Array(totalPage)].map((_, index) => (
          <button
            onClick={() => handlePageClick(index + 1)}
            key={index}
            className={styles.pageNumber}
            disabled={currentPage === index + 1}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <button
        disabled={currentPage >= totalPage}
        onClick={handleNextPage}
        className={styles.arrow}
      >
        {">"}
      </button>
    </div>
  );
};
