import React, { useRef } from "react";
import styles from "./index.module.css";

const Slider = ({ children }) => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollLeft -= 150;
  };

  const scrollRight = () => {
    sliderRef.current.scrollLeft += 150;
  };

  return (
    <div className={styles.slider}>
      <button onClick={scrollLeft} className={styles.arrow}>
        {"<"}
      </button>

      {React.cloneElement(children, { ref: sliderRef })}

      <button onClick={scrollRight} className={styles.arrow}>
        {">"}
      </button>
    </div>
  );
};

export default Slider;
