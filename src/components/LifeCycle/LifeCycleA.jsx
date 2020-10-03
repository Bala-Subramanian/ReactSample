import React, { Component } from 'react';
import LifeCycleB from './LifeCycleB';

class LifeCycleA extends Component {
    constructor(props){
        super(props)
        this.state = {
            name:"Bala"
        }
        console.log("LifeCycleA Constructor")
    }
    static getDerivedStateFromProps(props,state){
        console.log("LifeCycleA getDerivedStateFromProps(props,state)");
        return null;
    }
    componentDidMount(){
        console.log("LifeCycleA componentDidMount");
        return null;
    }
    
    render() {
        console.log("LifeCycleA render")
        return (
            <div>
                <div>LifeCycle A</div>
                <button>Change state</button>
                <LifeCycleB></LifeCycleB>
            </div>
        )
    }
    
}

export default LifeCycleA
