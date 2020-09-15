import React, { Component } from "react";
import "./props-state.css";
export const PropsState = (props) => {
    return (
        <div>
            <h1>First name is: {props.firstname}</h1>
            {props.children}
            {/* <h1>First name is: {props.firstname} and last name is {props.lastname}</h1> */}
        </div>
    )
}
// USING CLASS METHOD
export class Message extends Component {
    constructor(){
        super();
        this.state = {
            message:"Welcome"
        }
    }
    onSubscribe(){
        this.setState({
            message:"Thanks for subscribing"
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.onSubscribe()}>Subscribe</button>
            </div>
        );
    }
}