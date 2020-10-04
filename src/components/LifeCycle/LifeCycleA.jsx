import React, { Component } from 'react';
import LifeCycleB from './LifeCycleB';

class LifeCycleA extends Component {
    constructor(props){
        super(props)
        this.state = {
            name:"Bala"
        };
        console.log("LifeCycleA Constructor");
    }
    static getDerivedStateFromProps(props,state){
        console.log("LifeCycleA getDerivedStateFromProps(props,state)");
        return null;
    }
    componentDidMount(){
        console.log("LifeCycleA componentDidMount");
    }
    shouldComponentUpdate(){
        console.log("LifeCycleA shouldComponentUpdate");
        return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("LifeCycleA getSnapshotBeforeUpdate");
        return null;
    }
    componentDidUpdate(){
        console.log("LifeCycleA componentDidUpdate");
    }
    componentWillUnmount(){
        console.log("LifeCycleB componentWillUnmount");
    }
    changeState = () =>{
        console.log("LifeCycleA changeState")
        this.setState({
            name:"BalaS"
        })
    }
    render() {
        console.log("LifeCycleA render")
        return (
            <div>
                <div>LifeCycle A</div>
                <button onClick = {this.changeState}>Change state</button>
                <LifeCycleB></LifeCycleB>
            </div>
        )
    }
} 
export default LifeCycleA
