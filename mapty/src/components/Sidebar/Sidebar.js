/* eslint-disable jsx-a11y/alt-text */
import React, { Fragment, useState } from "react";
import classes from './Sidebar.module.css';
import Activity from "../UI/Activity";
import img from '../.././logo.png';
import Form from "./Form";

const Sidebar = function (props) {

    return (
        <div className={ classes.Sidebar }>
            <img className={ classes.logo } src={ img } height="75px" ></img>
            <div className={ classes["activites-wrapper"] }>
                <div className={ classes["activites-container"] }>
                    <Form className={ classes.Form }></Form>
                    { props.ActivityList.map((item) => {
                        return <Activity Activity={ item }></Activity>
                    }) }

                </div>
                <div>
                    <p className={ classes.copyright }>
                        © Copyright by Mohd Farhan Akhtar.
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Sidebar;
