import React from 'react';
import './App.css';
import { Route, NavLink,HashRouter } from "react-router-dom";
import UserDetails from "./UserDetails"
import ConfirmationComponent from './ConfirmationComponent.js'



class App extends React.Component{
  constructor(props)
    {
      super(props);
      this.state= {responseData:[]}
    }
    passData(data){
      console.log(data);
      this.setState({responseData:data})
    }
    render(){
      return (
        <div className="mdl-grid">
          
          
          
            <HashRouter>
              <div>
              <li hidden><NavLink exact to="/"></NavLink></li>
              <li hidden> <NavLink exact to="/confirmation"></NavLink></li>
              </div>
              <div className="mdl-cell mdl-cell--12-col">
              <Route exact path="/" render={(props) => (
                    <UserDetails {...props}  passData={(data)=>this.passData(data)} /> )}/>
                <Route path="/confirmation" render={(props) => (
                    <ConfirmationComponent {...props} responseData={this.state.responseData}/> )}/>
              </div>
            </HashRouter>
         
          
        </div>
      );
    }
}

export default App;
