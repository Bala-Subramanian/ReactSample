import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
class App extends Component{
  constructor(){
    super();
    this.state = {
      string:'Good morning!'
    };
  }
  render(){
    return(
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{this.state.string}</p>
        <button onClick={() => this.setState({string:'Good evening!' })}>Change Text </button> 
        {/* to change the content of text*/}
      </header>
    </div>
    );
  }
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           hai new Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
