import React, { Component } from 'react'

class Formcomponent extends Component {
    constructor() {
        super()

        this.state = {
            username: "",
            Password: '',
            chars:"",
        };
    }// end of constructor
    onUsernameHandler = (event) => {
        this.setState({
            username: event.target.value,
            chars : event.target.value.length
        })
    }

    onFormsubmit = event => {
        alert(`${this.state.username}`)
        event.preventDefault()
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onFormsubmit}>
                    <div>
                        <label htmlFor="username">Username: </label>
                        <input
                            type="text"
                            name="username"
                            value={this.state.username}
                            onChange={this.onUsernameHandler} />
                    </div>
                    <div>
                        <label>{this.state.chars}  characters entered.</label>
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Formcomponent