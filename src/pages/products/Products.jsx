import React from "react";
import { Search, Pages, Sort } from "../../components";
import products_banner from "../../assets/banner/product_banner.png";

import classes from "./products.module.scss";

const Products = () => {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.container_search}>
          <Search
            borderColor="#d1d5d7"
            buttonColor="#f9fafb"
            color="black"
            buttonWidth="2.5rem"
            buttonHeight="2.25rem"
            buttonMarginBottom="-1px"
            strokeSvg="#3598cc"
          />
        </div>
      </div>
      <div className={classes.container_pages}>
        <Pages />
      </div>

      <div className={classes.products_banner}>
        <img
          className={classes.products_banner_img}
          src={products_banner}
          alt=""
        />
        <div className={classes.products_banner_information}>
          <h1 className={classes.products_banner_information_title}>Watches</h1>
          <p className={classes.products_banner_information_description}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. At qui
            placeat consequatur maxime corrupti quo, sequi earum fugit tempore
            sit ut natus, dignissimos cumque, eius quibusdam! Quaerat doloribus,
            quo sequi maxime, sint hic incidunt minima quidem ipsa dolorem error
            omnis corporis soluta iure quod repudiandae vitae dolores, beatae
            velit optio.
          </p>
        </div>
      </div>
      <div className={classes.container}>
        <div className={classes.section_sort}>
          <h1 className={classes.section_sort_title}>All Product</h1>
          <div className={classes.section_sort_label}>
            <Sort />
          </div>
        </div>
      </div>
    </>
  );
};

export { Products };
