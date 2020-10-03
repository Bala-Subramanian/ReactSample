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
        this.onIncrementFiveConstructor = this.onIncrementFiveConstructor.bind(this);
    }//end of constructor 
    onIncrement() {
        console.log("onIncrement");
        console.log(this);
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
    onIncrementFiveArrow = () =>{
        console.log("onIncrementFiveArrow");
        this.onIncrementOne()
        this.onIncrementOne()
        this.onIncrementOne()
        this.onIncrementOne()
        this.onIncrementOne()
    }
    onIncrementFiveConstructor() {
        console.log("onIncrementFiveConstructor");
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
                <h1>EVENT BINDING</h1>
                <button onClick={this.onIncrementFive.bind(this)}>EVENT BINDING METHOD 1 - USING BIND KEYWORD</button>
                <br></br>
                <button onClick={() => this.onIncrementFive()}>EVENT BINDING METHOD 2 - USING ARROW FUNCTIONS</button>
                <br></br>
                <button onClick={this.onIncrementFiveArrow}>EVENT BINDING METHOD 3 - BINDING IN CONSTRUCTOR USING ARROW METHOD</button>
                <br></br>
                <button onClick={this.onIncrementFiveConstructor}>EVENT BINDING METHOD 4 - BINDING IN CONSTRUCTOR (RECOMMENDED)</button>
                
            </div>
        );
    }
}
