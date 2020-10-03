import React, {Component} from 'react';
import './App.css';
// import {CardList, CardListSingle,CardListFromCard} from './components/card-list/card-list.component';
// import {PropsState, Message, CounterSetState} from "./components/props-state/props-state";
// import Dummyhome, {BalaComp} from 'E:/MyProjects/react/sampleappnew/src/components/dummy-component/dummy-list';
// import NameList from "./components/NameList/NameList";
import LifeCycleA from "./components/LifeCycle/LifeCycleA";
class App extends Component{
  render() {
    return (
      <div className="App">
        {/* <PropsState firstname="Bruce">
          <p>This is child</p>
        </PropsState>
        <Message></Message>
        <CounterSetState></CounterSetState> */}
        {/* this is for list rendering */}
        {/* <NameList /> */}
        <LifeCycleA></LifeCycleA>
      </div>
    );
  }
}
export default App;
// class App extends Component{
//   constructor(){
//     super();//required bcoz we are extracting methods from React
//     // To Get DummyJSONS
//     // https://jsonplaceholder.typicode.com/users
//     this.state = {
//       monsters:[] // this shouldbe the same variable we need to enter on componentDidMount responseDetails
//     };
//   }
//   // to fetch API from backend. Sample
//   componentDidMount(){
//     var dummyJSON = "https://jsonplaceholder.typicode.com/users";
//     fetch(dummyJSON)//insert the URL from where we need to obtain the response
//          .then(response => response.json()) //the obtained values will be stored as response
//          .then(backendDetails => this.setState({monsters:backendDetails})) // assign the stored response and to the required variable
//   }
//   render(){
//     // console.log(this.state.monsters);
//     return (
//       <div className = 'app'>
//         <h1>Learning PROPS and STATE</h1>
//         <PropsState firstname="Bruce"></PropsState>
//         <PropsState firstname="Bruce Wayne"></PropsState>
//         {/* <h1>CARDLIST</h1>
//         <CardListFromCard monstersCard={this.state.monsters}></CardListFromCard> */}
        
//        {/* <CardListSingle monsters_arg1={this.state.monsters}></CardListSingle>passing monsters as a props */}
        
        
//           {/* {}- this parenthesis is required for every js lines */}
//           {/* <CardList>
//             {this.state.monsters.map(monst => (
//             <h2 key = {monst.id}>  {monst.name} </h2>
//           ))}
//         </CardList> */}

//     </div>
//     )
//   }
// }
//export default App;

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
