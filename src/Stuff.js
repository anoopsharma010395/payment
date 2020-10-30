import React, { Component } from "react";
 
class Stuff extends Component {
  constructor(props)
  {
    super(props);
    this.state ={dataImages:props.dataImages}
  }
  componentDidUpdate(){
    var image = new Image();
    image.src = this.state.dataImages[0].dataURI
    document.body.appendChild(image);
  }
  
  render() {
    return (
      <div>
       <div>1</div>
       <div>2</div>
       <div>3</div>
       <div>4</div>
      </div>
    );
  }
}
 
export default Stuff;
