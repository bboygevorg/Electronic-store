import React from "react";
import { Link } from "react-router-dom";

import classes from "./footer.module.scss";

import logo_Footer from "../../assets/logo/logo_Footer.svg";
import logo_social_1 from "../../assets/logo/logo_social_1.svg";
import logo_social_2 from "../../assets/logo/logo_social_2.svg";
import logo_social_3 from "../../assets/logo/logo_social_3.svg";
import { Newsletter } from "../../components";

import bank_1 from "../../assets/icon-bank/bank_1.svg";
import bank_2 from "../../assets/icon-bank/bank_2.svg";
import bank_3 from "../../assets/icon-bank/bank_3.svg";
import bank_4 from "../../assets/icon-bank/bank_4.svg";
import bank_5 from "../../assets/icon-bank/bank_5.svg";
import bank_6 from "../../assets/icon-bank/bank_6.svg";

const Footer: React.FC = () => {
  return (
    <>
      <div className={classes.footer}>
        <div className={classes.footer__container}>
          <div className={classes.footer__container__top}>
            <div className={classes.footer__container__top__social}>
              <div className={classes.footer__container__top__social__logo}>
                <Link to="/">
                  <img src={logo_Footer} alt="logo" />
                </Link>
              </div>
              <div className={classes.footer__container__top__social__text}>
                <p>
                  At LetsBargain we are dedicated to helping you get the best
                  prices on electronics and home living products.{" "}
                </p>
              </div>
              <div className={classes.footer__container__top__social__link}>
                <div>
                  <Link to="/">
                    <img src={logo_social_1} alt="facebook" />
                  </Link>
                </div>
                <div>
                  <Link to="/">
                    <img src={logo_social_2} alt="instagram" />
                  </Link>
                </div>
                <div>
                  <Link to="/">
                    <img src={logo_social_3} alt="pinterest" />
                  </Link>
                </div>
              </div>
            </div>
            <div className={classes.footer__container__top__right_part}>
              <div
                className={
                  classes.footer__container__top__right_part__categories
                }
              >
                <p
                  className={
                    classes.footer__container__top__right_part__categories__title
                  }
                >
                  Categories
                </p>
                <div
                  className={
                    classes.footer__container__top__right_part__categories__content
                  }
                >
                  <div>
                    <Link to="/">
                      <p>Today's Deals</p>
                    </Link>
                  </div>
                  <div>
                    <Link to="/">
                      <p>Product</p>
                    </Link>
                  </div>
                  <div>
                    <Link to="/">
                      <p>Brands</p>
                    </Link>
                  </div>
                  <div>
                    <Link to="/">
                      <p>Clearance</p>
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className={
                  classes.footer__container__top__right_part__categories
                }
              >
                <p
                  className={
                    classes.footer__container__top__right_part__categories__title
                  }
                >
                  About
                </p>
                <div
                  className={
                    classes.footer__container__top__right_part__categories__content
                  }
                >
                  <div>
                    <Link to="/">
                      <p>Social initiative</p>
                    </Link>
                  </div>
                  <div>
                    <Link to="/">
                      <p>FAQ</p>
                    </Link>
                  </div>
                  <div>
                    <Link to="/">
                      <p>Contact</p>
                    </Link>
                  </div>
                  <div>
                    <Link to="/">
                      <p>Careers</p>
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className={
                  classes.footer__container__top__right_part__categories
                }
              >
                <p
                  className={
                    classes.footer__container__top__right_part__categories__title
                  }
                >
                  Legal
                </p>
                <div
                  className={
                    classes.footer__container__top__right_part__categories__content
                  }
                >
                  <div>
                    <Link to="/">
                      <p>Terms of Service</p>
                    </Link>
                  </div>
                  <div>
                    <Link to="/">
                      <p>Privacy Policy</p>
                    </Link>
                  </div>
                  <div>
                    <Link to="/">
                      <p>Return Policy</p>
                    </Link>
                  </div>
                  <div>
                    <Link to="/">
                      <p>Shipping</p>
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className={
                  classes.footer__container__top__right_part__newsLetter
                }
              >
                <p
                  className={
                    classes.footer__container__top__right_part__newsLetter__title
                  }
                >
                  Newsletter
                </p>
                <p
                  className={
                    classes.footer__container__top__right_part__newsLetter__text
                  }
                >
                  Get notified on great deals weekly. Subscribe to our
                  newsletter
                </p>
                <div
                  className={
                    classes.footer__container__top__right_part__newsLetter__input
                  }
                >
                  <Newsletter />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.footer__bottom}>
        <div className={classes.footer__bottom__container}>
          <div className={classes.footer__bottom__container__bargain}>
            <span>
              © LetsBargain {new Date().getFullYear()}. All Rights Reserved
            </span>
          </div>
          <div className={classes.footer__bottom__container__bank}>
            <div>
              <img src={bank_1} alt="" />
            </div>
            <div>
              <img src={bank_2} alt="" />
            </div>
            <div>
              <img className={classes.bank_3} src={bank_3} alt="" />
            </div>
            <div>
              <img src={bank_4} alt="" />
            </div>
            <div>
              <img src={bank_5} alt="" />
            </div>
            <div>
              <img className={classes.bank_6} src={bank_6} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Footer };
