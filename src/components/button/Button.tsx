import React from "react"
import { ButtonCart } from "../../helpers/globalStyle";

import classes from './button.module.scss';

type ButtonTypes = {
    button: string;
    padding?: string;
    paddingFocus?: string;
} 

const Button = (props: ButtonTypes) => {

    const [buttonFocus, setButtonFocus] = React.useState('')

    const ChangeColor = () => {
        setButtonFocus(classes.button_active)
    }

    return (
        <ButtonCart className={`${classes.button} ${buttonFocus ? classes.button_active : classes.button}`} 
             onClick={ChangeColor}
             padding={props.padding} 
             paddingFocus={props.paddingFocus}
            > 
            {props.button} 
        </ButtonCart>
    ) 
}

export {Button};