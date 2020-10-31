import './App.css';
import React from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import UploadAndSplit from "./UploadAndSplit";
import Puzzle from "./Puzzle";

class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state ={imageData:[]}
    this.imageUploaded = this.imageUploaded.bind(this);
  
  }
  imageUploaded(state)
  {
    this.setState({imageData:state})
  }
  
  render()
  {
    return (
      <div className="App">
        
        <HashRouter>
        <div className="mdl-grid">
          <h1 className="mdl-cell mdl-cell--12-col text-align-center">Image Puzzle</h1>
          <ul hidden className="header mdl-cell mdl-cell--12-col">
            <li><NavLink exact to="/">HUploadAndSplitome</NavLink></li>
            <li><NavLink to="/puzzle-2">Puzzle</NavLink></li>
          </ul>
          <div className="mdl-cell mdl-cell--12-col text-align-center">
            <Route exact path="/" render={(props) => (
                <UploadAndSplit {...props} imageUploaded={this.imageUploaded} /> )}/>
            <Route path="/puzzle-2" render={(props) => (
                <Puzzle {...props} dataImages={this.state.imageData} /> )}/>
          </div>
        </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;
