import React from "react";
import classes from "./pages.module.scss";

const Pages = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.off_page}>Home</div>
      <div className={classes.arrow}>
        <svg
          width="8"
          height="12"
          viewBox="0 0 8 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.5 1L6.5 6L1.5 11"
            stroke="#9CA3AF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className={classes.to_pages}>All products</div>
    </div>
  );
};

export { Pages };
