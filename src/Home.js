import React, { Component } from "react";
 
class Home extends Component {
  constructor(props)
  {
    super(props);
    this.state ={imageValue:""}
  }
  imageUploaded(event)
  {
   this.props.imageUploaded(event);
  }
  render() {
    return (
      <div>
        <h2>HELLO</h2>
        <input type="file"  value= {this.state.imageValue} onChange = {(event)=> this.imageUploaded(event)} />
      </div>
    );
  }
}
 
export default Home;
