import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
class App extends Component{
  constructor(){
    super();
    this.state = {
      movies:[
        {
          name:"Sivaji",
          id:'mov1' // required for each key
        },
        {
          name:"Padayappa",
          id:'mov2' // required for each key
        },
        {
          name:"Kabali",
          id:'mov3' // required for each key
        }
      ]
    };
  }
  render(){
    return(
    <div className="App">
      {/* {}- this parenthesis is required for every js lines */}
      {this.state.movies.map(movieDetails => (
        <h1 key = {movieDetails.id}>{movieDetails.name}</h1>
      ))}
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
