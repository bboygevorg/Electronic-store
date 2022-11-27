import React from "react";
import { Link } from "react-router-dom";

import classes from "./header.module.scss";

import logo from "../../assets/logo/dealaday_logo.svg";
import barIcon1 from "../../assets/icon/barIcon1.svg";
import barIcon2 from "../../assets/icon/barIcon2.svg";
import barIcon3 from "../../assets/icon/barIcon3.svg";

import { BlockContainer, MenuBurger, Search } from "../../components";

type scrollUpdateProps = {
  updateScroll: any;
};

export const Header = (props: scrollUpdateProps) => {
  const [menuActiveMobile, setMenuActiveMobile] = React.useState(false);

  return (
    <div className={classes.header}>
      <BlockContainer
        active={menuActiveMobile}
        setActive={setMenuActiveMobile}
      />
      <MenuBurger
        active={menuActiveMobile}
        setActive={setMenuActiveMobile}
        updateScroll={props.updateScroll}
      />
      <div className={classes.container}>
        <div className={classes.top_header}>
          <div className={classes.logo}>
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className={classes.search}>
            <Search
              borderColor="#6b7280"
              buttonColor="#1f2937"
              color="#fff"
              buttonWidth="2.5rem"
              buttonHeight="2.44rem"
              buttonMarginBottom="2.3px"
              strokeSvg="#fff"
            />
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
            <button
              className={classes.burger_menu}
              onClick={() => {
                setMenuActiveMobile(!menuActiveMobile);
                props.updateScroll(true);
              }}
            >
              <div className={classes.bar_1}></div>
              <div className={classes.bar_2}></div>
              <div className={classes.bar_3}></div>
            </button>
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
                  Today&apos;s Deals
                </Link>
              </li>
              <li>
                <Link className={classes.color} to="/products">
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
