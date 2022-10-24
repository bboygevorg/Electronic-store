import React from "react";
import { Link } from "react-router-dom";

import classes from "./menuBurger.module.scss";

import closeBtn from "../../assets/icon/close-btn.svg";
import logoMobile from "../../assets/logo/logo-mobile.svg";
import rowRight from "../../assets/icon/row-right.svg";

type menuActiveProps = {
  active: any;
  setActive: any;
  updateScroll: any;
};

const MenuBurger = (props: menuActiveProps) => {
  return (
    <div className={props.active ? classes.menu_active : classes.menu_mobile}>
      <div className={classes.menu_mobile__container}>
        <div
          className={classes.menu_mobile__container__closeBtn}
          onClick={() => {
            props.setActive(false);
            props.updateScroll(false);
          }}
        >
          <img src={closeBtn} alt="close" />
          <span>Close</span>
        </div>
        <div className={classes.menu_mobile__container__logoMobile}>
          <Link to="/">
            <img src={logoMobile} alt="Lets bargain" />
          </Link>
        </div>
      </div>
      <div className={classes.line}></div>
      <div className={classes.menu_mobile__container}>
        <div className={classes.menu_mobile__container__nav}>
          <div>
            <Link to="/">Today's Deals</Link>
          </div>
          <div>
            <p>Brands</p>
            <img src={rowRight} />
          </div>
          <div>
            <p>Brands</p>
            <img src={rowRight} />
          </div>
          <div>
            <Link to="/">Clearance</Link>
          </div>
        </div>
      </div>
      <div className={classes.line}></div>
      <div className={classes.menu_mobile__container}>
        <div className={classes.menu_mobile__container__log}>
          <div>
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 7C16 8.06087 15.5786 9.07828 14.8284 9.82843C14.0783 10.5786 13.0609 11 12 11C10.9391 11 9.92172 10.5786 9.17157 9.82843C8.42143 9.07828 8 8.06087 8 7C8 5.93913 8.42143 4.92172 9.17157 4.17157C9.92172 3.42143 10.9391 3 12 3C13.0609 3 14.0783 3.42143 14.8284 4.17157C15.5786 4.92172 16 5.93913 16 7V7ZM12 14C10.1435 14 8.36301 14.7375 7.05025 16.0503C5.7375 17.363 5 19.1435 5 21H19C19 19.1435 18.2625 17.363 16.9497 16.0503C15.637 14.7375 13.8565 14 12 14V14Z"
                stroke="gray"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Account</span>
          </div>
          <div>
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 11V7C16 5.93913 15.5786 4.92172 14.8284 4.17157C14.0783 3.42143 13.0609 3 12 3C10.9391 3 9.92172 3.42143 9.17157 4.17157C8.42143 4.92172 8 5.93913 8 7V11M5 9H19L20 21H4L5 9Z"
                stroke="gray"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Favorite (0)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export { MenuBurger };
