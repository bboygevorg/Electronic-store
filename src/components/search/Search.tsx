import React from "react";
import defaultClasses from './search.module.scss'
import { mergeClasses } from "../../helpers/mergeClasses";

import search from '../../assets/icon/Vector.svg'

type SearchTypes = {
    classes: String;

}

export const Search = (props: SearchTypes) => {

    const classes = mergeClasses(defaultClasses, props.classes)

    return (
        <div className={classes.search_wrapper}>
            <input type="text" 
                   placeholder="Search for products and brands"
                   className={defaultClasses.search_tern}
            />
            <button type="submit" className={classes.search_button}>
                <img src={search} alt="" />
            </button>
        </ div>
    )
}



