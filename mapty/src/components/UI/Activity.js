import React, { Fragment } from "react";
import classes from './Activity.module.css';


const Activity = function (props) {
    return (
        <div className={ classes.Activity }>
            <div className={ classes.ActivityColour }></div>
            <div className={ classes.wrapper }>
                <ul className={ classes.list }>
                    <h2>{ props.Activity.activity }</h2>
                    <li>🚴‍♀️ { props.Activity.distance } <span className={ classes.smol }>KM</span></li>
                    <li>⏱ { props.Activity.time } <span className={ classes.smol }>MIN</span></li>
                    <li>⚡️ { props.Activity.cad } <span className={ classes.smol }>KM/H</span></li>
                    <li>⛰ { props.Activity.bell } <span className={ classes.smol }>M</span></li>
                </ul>
            </div>
        </div>
    );
}

export default Activity