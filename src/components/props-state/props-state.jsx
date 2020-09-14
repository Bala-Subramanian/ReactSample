import React from "react";
import "./props-state.css";
export const PropsState = (props) => {
    return (
        <div>
            <h1>First name is: {props.firstname}</h1>
            {/* <h1>First name is: {props.firstname} and last name is {props.lastname}</h1> */}
        </div>
    )
}
