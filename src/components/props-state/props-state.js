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
    constructor() {
        super();
        this.state = {
            message: "Welcome"
        }
    }
    onSubscribe() {
        this.setState({
            message: "Thanks for subscribing"
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

//SETSTATE METHOD
export class CounterSetState extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }
    onIncrement() {
        this.setState({
            count: this.state.count + 1
        })
    }
    onIncrementOne() {
        this.setState(
            (prevState) => ({
                count: prevState.count + 1
            })
        )
    }
    onIncrementFive() {
        this.onIncrementOne()
        this.onIncrementOne()
        this.onIncrementOne()
        this.onIncrementOne()
        this.onIncrementOne()
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={() => this.onIncrement()}>Increment</button><br></br>
                <button onClick={() => this.onIncrementFive()}>Increment Five</button>
            </div>
        );
    }
}