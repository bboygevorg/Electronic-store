import React from "react";
import { Button, WatchList, WishList } from "../../components";
import classes from './addCart.module.scss';

import { SectionCart } from "../../helpers/globalStyle";

type AddCartType = {
    width: string | undefined;
    padding: string;
    paddingFocus: string;
}

const AddCart = (props: AddCartType) => {
    const button = 'Add To Cart' 

    return (
        <>
            <SectionCart width={props.width}>
                <div className={classes.option_content}>
                    <div className={classes.watch_list}>
                       <WatchList />
                    </div>
                    <div className={classes.wish_list}>
                       <WishList />
                    </div>
                </div>
                <div className={classes.button_content}>
                    <Button button={button} 
                            padding={props.padding}
                            paddingFocus={props.paddingFocus}
                    />
                </div>
            </SectionCart>
        </>
    )
}

export {AddCart};