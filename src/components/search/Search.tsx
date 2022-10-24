import React from "react";
import search from "../../assets/icon/Vector.svg";
import { Input, Button } from "../../helpers/globalStyle";

import classes from "./search.module.scss";

type SearchTypes = {
  borderColor: string | undefined;
  buttonColor: string | undefined;
  color: string | undefined;
  buttonWidth: string | undefined;
  buttonHeight: string | undefined;
  buttonMarginBottom: string | undefined;
};

export const Search = (props: SearchTypes) => {
  return (
    <div className={classes.search__container}>
      <Input
        input="text"
        placeholder="Search for product and brands"
        borderColor={props.borderColor}
        color={props.color}
      />
      <Button
        type="submit"
        buttonColor={props.buttonColor}
        borderColor={props.borderColor}
        buttonWidth={props.buttonWidth}
        buttonHeight={props.buttonHeight}
        buttonMarginBottom={props.buttonMarginBottom}
      >
        <img src={search} alt="" />
      </Button>
    </div>
  );
};
