import React from "react";
import { Link } from "react-router-dom";

import classes from "./header.module.scss";

import logo from "../../assets/logo/dealaday_logo.svg";
import barIcon1 from "../../assets/icon/barIcon1.svg";
import barIcon2 from "../../assets/icon/barIcon2.svg";
import barIcon3 from "../../assets/icon/barIcon3.svg";

import { Search } from "../../components";

export const Header: React.FC = () => {
  return (
    <div className={classes.header}>
      <div className={classes.container}>
        <div className={classes.top_header}>
          <div className={classes.logo}>
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className={classes.search}>
            <Search borderColor="#6b7280" buttonColor="#1f2937" color="#fff" />
          </div>
          <div className={classes.account_bar}>
            <div className={classes.navigate_header}>
              <Link to="/">
                <img src={barIcon1} alt="" />
              </Link>
            </div>
            <div className={classes.navigate_header}>
              <Link to="/">
                <img src={barIcon2} alt="" />
              </Link>
            </div>
            <div className={classes.burger_menu}>
              <div className={classes.bar_1}></div>
              <div className={classes.bar_2}></div>
              <div className={classes.bar_3}></div>
            </div>
            <div className={`${classes.navigate_header}, ${classes.recycle}`}>
              <Link to="/">
                <img src={barIcon3} alt="" />
              </Link>
            </div>
          </div>
        </div>
        <div className={classes.bottom_header}>
          <div className={classes.nav_bar_container}>
            <ul className={classes.nav_bar}>
              <li>
                <Link className={classes.color} to="/">
                  Today's Deals
                </Link>
              </li>
              <li>
                <Link className={classes.color} to="/">
                  Products
                </Link>
              </li>
              <li>
                <Link className={classes.color} to="/">
                  Brands
                </Link>
              </li>
              <li>
                <Link className={classes.color} to="/">
                  Clearance
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
