import React from "react";

import classes from "./blockContainer.module.scss";

type menuActiveProps = {
  active: any;
  setActive: any;
};

const BlockContainer = (props: menuActiveProps) => {
  return (
    <div
      className={
        props.active ? classes.active_blockContainer : classes.block_container
      }
    ></div>
  );
};

export { BlockContainer };
