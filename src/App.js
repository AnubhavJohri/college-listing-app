import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch ,Redirect} from 'react-router-dom';
import './App.css';
import Home from "./Components/Home/Home";



class App extends Component {

  render() {
    return (
      <div>
        <Router>
          <Fragment>
            <Switch>
              <Route exact path='/home' component={Home} />
              <Route exact path='/**' render={()=><Redirect to="/home"/>} />
            </Switch>
          </Fragment>
        </Router>
      </div>
    );
  }
}

export default App

// import React, { Component } from "react";
//     import logo from "./logo.svg";
//     import "./App.css";
    
//     class App extends Component {
//       constructor(props) {
//         super(props);
//         this.state = {
//           items: 20,
//           loading: false
//         };
//       }
//       componentDidMount() {
//         // Detect when scrolled to bottom.
//         this.refs.myscroll.addEventListener("scroll", () => {
//           console.log("scrollTop="+this.refs.myscroll.scrollTop+" clientheight="+this.refs.myscroll.clientHeight+" scrollHeight="+this.refs.myscroll.scrollHeight);
//           if (
//             this.refs.myscroll.scrollTop + this.refs.myscroll.clientHeight >=
//             this.refs.myscroll.scrollHeight
//           ) {
//             this.loadMore();
//           }
//         });
//       }
    
//       showItems() {
//         var items = [];
//         for (var i = 0; i < this.state.items; i++) {
//           items.push(<li key={i}>Item {i}</li>);
//         }
//         return items;
//       }
    
//       loadMore() {
//         this.setState({ loading: true });
//         setTimeout(() => {
//           this.setState({ items: this.state.items + 20, loading: false });
//         }, 2000);
//       }
    
//       render() {
//         return (
//           <div
//             className="App"
//             ref="myscroll"
//             style={{ height: "100%", overflow: "auto" }}
//           >
//             <ul>
//               {this.showItems()}
//             </ul>
//             {this.state.loading
//               ? <p className="App-intro">
//                   loading ...
//                 </p>
//               : ""}
    
//           </div>
//         );
//       }
//     }
    
//     export default App;