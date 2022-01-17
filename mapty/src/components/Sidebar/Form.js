import React from "react";
import classes from './Form.module.css';

const Form = function (props) {
    return (
        <form className={ classes.mainForm }>
            <div className={ classes["mainForm-div"] }>
                <div className={ classes["grid-divs"] }>
                    <label>Type</label>
                    <select>
                        <option value="1">Running</option>
                        <option value="2">Cycling</option>
                    </select>
                </div>
                <div className={ classes["grid-divs"] }>
                    <label>Distance</label>
                    <input placeholder="km"></input>
                </div>
                <div className={ classes["grid-divs"] }>
                    <label>Duration</label>
                    <input placeholder="min"></input>
                </div>
                <div className={ classes["grid-divs"] }>
                    <label>Cadence</label>
                    <input placeholder="step/min"></input>
                </div>
            </div>
        </form >
    );
};

export default Form;