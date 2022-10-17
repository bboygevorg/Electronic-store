import React from "react";

import classes from './newsletter.module.scss';

const Newsletter: React.FC = () => {
    return (
        <div className={classes.newsletter}>
            <input type="text" 
                   placeholder="Enter your mail"
            />
            <button className={classes.newsletter__button}>Join Us</button>
        </div>
    )
}

export {Newsletter};