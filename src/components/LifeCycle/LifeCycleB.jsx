import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(props){
        super(props)
        this.state = {
            name:"Bala"
        }
        console.log("LifeCycleB Constructor")
    }
    static getDerivedStateFromProps(props,state){
        console.log("LifeCycleB getDerivedStateFromProps(props,state)");
        return null;
    }
    
    shouldComponentUpdate(){
        console.log("LifeCycleB shouldComponentUpdate");
        return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("LifeCycleB getSnapshotBeforeUpdate");
        return null;
    }
    componentDidUpdate(){
        console.log("LifeCycleB componentDidUpdate");
    }
    componentDidMount(){
        console.log("LifeCycleB componentDidMount");
        return null;
    }

    render() {
        console.log("LifeCycleB render")
        return (
            <div>LifeCycleB</div>
        )
    }
}

export default LifeCycleB
