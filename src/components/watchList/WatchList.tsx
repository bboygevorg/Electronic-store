import React from "react";
import classes from "./watchList.module.scss";

const WatchList: React.FC = () => {
  const [toggleClass, setToggleClass] = React.useState(false);

  const toggleColor = () => {
    setToggleClass(!toggleClass);
  };

  return (
    <div
      className={`${classes.watch_list}, ${
        toggleClass ? classes.active : classes.watch_list
      }`}
      onClick={toggleColor}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 10.7501C11.3096 10.7501 10.75 11.3098 10.75 12.0001C10.75 12.6905 11.3096 13.2501 12 13.2501C12.6904 13.2501 13.25 12.6905 13.25 12.0001C13.25 11.3098 12.6904 10.7501 12 10.7501ZM9.25 12.0001C9.25 10.4813 10.4812 9.25012 12 9.25012C13.5188 9.25012 14.75 10.4813 14.75 12.0001C14.75 13.5189 13.5188 14.7501 12 14.7501C10.4812 14.7501 9.25 13.5189 9.25 12.0001Z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.86829 12.0001C5.41108 16.2678 8.46131 18.2501 12 18.2501C15.5387 18.2501 18.5889 16.2678 21.1317 12.0001C18.5889 7.73244 15.5387 5.75012 12 5.75012C8.46131 5.75012 5.41108 7.73244 2.86829 12.0001ZM1.34883 11.628C4.09715 6.81869 7.63999 4.25012 12 4.25012C16.36 4.25012 19.9028 6.81869 22.6512 11.628C22.7829 11.8586 22.7829 12.1417 22.6512 12.3722C19.9028 17.1816 16.36 19.7501 12 19.7501C7.63999 19.7501 4.09715 17.1816 1.34883 12.3722C1.21706 12.1417 1.21706 11.8586 1.34883 11.628Z"
        />
      </svg>
    </div>
  );
};

export { WatchList };
