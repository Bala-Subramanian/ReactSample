import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {CardList, CardListSingle,CardListFromCard} from './components/card-list/card-list.component';
// import Dummyhome, {BalaComp} from 'E:/MyProjects/react/sampleappnew/src/components/dummy-component/dummy-list';

class App extends Component{
  constructor(){
    super();
    // To Get DummyJSONS
    // https://jsonplaceholder.typicode.com/users
    this.state = {
      monsters:[] // this shouldbe the same variable we need to enter on componentDidMount responseDetails
    };
  }
  // to fetch API from backend. Sample
  componentDidMount(){
    var dummyJSON = "https://jsonplaceholder.typicode.com/users";
    fetch(dummyJSON)//insert the URL from where we need to obtain the response
         .then(response => response.json()) //the obtained values will be stored as response
         .then(backendDetails => this.setState({monsters:backendDetails})) // assign the stored response and to the required variable
  }
  render(){
    // console.log(this.state.monsters);
    return (
      <div className = 'app'>
        <h1>CARDLIST</h1>
        <CardListFromCard monstersCard={this.state.monsters}></CardListFromCard>
        
       {/* <CardListSingle monsters_arg1={this.state.monsters}></CardListSingle>passing monsters as a props */}
        
        
          {/* {}- this parenthesis is required for every js lines */}
          {/* <CardList>
            {this.state.monsters.map(monst => (
            <h2 key = {monst.id}>  {monst.name} </h2>
          ))}
        </CardList> */}
        

    </div>
    )
  }
}
export default App;

// return(
    // <div className="App">
    //   <CardList name='Bala'>
    //     {/* {}- this parenthesis is required for every js lines */}
    //       {this.state.movies.map(movieDetails => (
    //       <h1 key = {movieDetails.id}>  {movieDetails.name} </h1>
    //     ))}
    //   </CardList>

    // </div>
    // );


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
