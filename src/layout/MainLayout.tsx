import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components";

import classes from "../scss/style.module.scss";

const MainLayout: React.FC = () => {
  const [scrollOf, setScrollOf] = React.useState(false);

  const updateScroll = (value: boolean) => {
    setScrollOf(value);
  };

  return (
    <div className={scrollOf ? classes.wrapper_ofScroll : classes.wrapper}>
      <Header updateScroll={updateScroll} />
      <div className={classes.content}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
