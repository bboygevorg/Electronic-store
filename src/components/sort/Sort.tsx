import React from "react";

import classes from "./sort.module.scss";

const Sort = () => {
  const [sort, setSort] = React.useState(false);

  return (
    <>
      <div className={classes.sort}>
        <span
          className={classes.sort_title}
          onClick={() => {
            setSort(!sort);
          }}
        >
          Default
        </span>
        <div className={sort ? classes.sort_popup : classes.sort_none}>
          <ul>
            <li className="active">
              <p>Default</p>
            </li>
            <li>
              <p>Featured</p>
            </li>
            <li>
              <p>Customer Rating</p>
            </li>
            <li>
              <p>Price - Lowest First</p>
            </li>
            <li>
              <p>Price - Lowest First</p>
            </li>
            <li>
              <p>Product Name A-Z</p>
            </li>
            <li>
              <p>Product Name Z-A</p>
            </li>
            <li>
              <p>Highest % Discount</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export { Sort };
