import './App.css';
import React from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";

var imageToSlices = require('image-to-slices');
var path = require('path');

class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state ={dataImages:[]}
    this.imageUploaded = this.imageUploaded.bind(this);
  }
  imageUploaded(event)
  {
    console.log(event);
    //this.setState({imageValue:event.target.value});
    var imageToSlice = imageToSlices;
    var self = this;
    var lineXArray = [100,200,300];
    var lineYArray = [100,200];
    //let imgPath = path.join(__dirname, event.target.value);
    imageToSlice(imgPath, lineXArray, lineYArray, {
      saveToDataUrl: true,
      //middleBoundaryMode: true,
      clipperOptions: {
        quality: 75
      }
    }, function(dataUrlList) {
        console.log('sliced', dataUrlList);
        self.setState({dataImages:dataUrlList})
    });
  }
  // componentDidMount(){
  //   var imageToSlices = window.imageToSlices;
  //   imageToSlices(source, lineXArray, lineYArray, {
  //   saveToDataUrl: true
  //   }, function(dataUrlList) {
  //   console.log('sliced', dataUrlList);
  //   });
  // }
  render()
  {
    return (
      <div className="App">
        
        <HashRouter>
        <div>
          <h1>Simple SPA</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/puzzle-2">Stuff</NavLink></li>
          </ul>
          <div className="content">
            
            <Route exact path="/" render={(props) => (
                <Home {...props} imageUploaded={this.imageUploaded} /> )}/>
            <Route path="/puzzle-2" render={(props) => (
                <Stuff {...props} dataImages={this.state.dataImages} /> )}/>
          </div>
        </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;
