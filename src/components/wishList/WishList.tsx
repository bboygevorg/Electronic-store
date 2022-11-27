import React from "react";

import classes from "./wishList.module.scss";

const WishList: React.FC = () => {
  const [toggleClass, setToggleClass] = React.useState(false);

  const toggleColor = () => {
    setToggleClass(!toggleClass);
  };

  return (
    <button
      className={`${classes.wish_list}, ${
        toggleClass ? classes.active : classes.wish_list
      }`}
      onClick={toggleColor}
    >
      <svg
        className={classes.active_color}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.31798 6.31816C3.90011 6.73603 3.56864 7.2321 3.34249 7.77807C3.11634 8.32404 2.99994 8.90921 2.99994 9.50016C2.99994 10.0911 3.11634 10.6763 3.34249 11.2222C3.56864 11.7682 3.90011 12.2643 4.31798 12.6822L12 20.3642L19.682 12.6822C20.5259 11.8382 21 10.6936 21 9.50016C21 8.30668 20.5259 7.16208 19.682 6.31816C18.8381 5.47424 17.6935 5.00013 16.5 5.00013C15.3065 5.00013 14.1619 5.47424 13.318 6.31816L12 7.63616L10.682 6.31816C10.2641 5.90029 9.76803 5.56882 9.22207 5.34267C8.6761 5.11652 8.09093 5.00012 7.49998 5.00012C6.90903 5.00012 6.32386 5.11652 5.77789 5.34267C5.23192 5.56882 4.73584 5.90029 4.31798 6.31816V6.31816Z"
          stroke=""
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export { WishList };
