import React, { Component } from "react";
 
class Puzzle extends Component {
  constructor(props)
  {
    super(props);
    //this.state ={dataImages:""}
    
    this.state={imgId:"", divid :"",newArray:[], quizComplete:false};
  }
   allowDrop(ev) {
    ev.preventDefault();
  }
  
   drag(ev) {
     this.setState({imgId:ev.target.id})
     this.setState({divId: ev.target.parentElement.id})
    
  }
  
   dropImg(ev) {
    ev.preventDefault();
    var data = this.state.divId;
    var image = this.state.imgId;
    var element = document.getElementById(image);
    
    if(!(element.nodeName == ev.target.nodeName)){
      let parentElementId = element.parentElement.id;
      ev.target.appendChild(element);
      if(! (parentElementId.split("_")[0] == ev.target.id.split("_")[0]) )
      {
      this.unCheckAllBoxes(element.id.split("_")[1],this.state.divId.split("_")[1]);
      }
    }
    
  }
  dropDiv(ev) {
    ev.preventDefault();
    var data = this.state.imgId;
    var element = document.getElementById(data);
    let parentElementId = element.parentElement.id;
    if(!(element.nodeName == ev.target.nodeName)){
      ev.target.appendChild(element);
      if(parentElementId.split("_")[0] == ev.target.id.split("_")[0])
      {
        this.updateBoxes(this.state.imgId.split("_")[1],parentElementId.split("_")[1],ev.target.id.split("_")[1]);
      }
      else{
        this.checkAllBoxes(this.state.imgId.split("_")[1],ev.target.id.split("_")[1]);
      }
    }
    
  }
  unCheckAllBoxes(img,div){
    let newNumber = img + "" + div;
    const result = this.state.newArray.filter(item => item != newNumber);
    this.setState({newArray:result})
  }
  checkAllBoxes(img,div){
    let newNumber = img + "" + div
    if(this.state.newArray.indexOf(newNumber) == -1){
      let tempArray = this.state.newArray;
      tempArray.push(newNumber)
      this.setState({newArray:tempArray})
    }
    if(this.state.newArray.length ==9){
      let isValid =true;
      this.state.newArray.forEach(function(item){
        if(! (+item % 11 == 0)){
          isValid = false;
        }
      });
      this.setState({quizComplete: isValid})
    }
  }
  updateBoxes(img,oldValue,newValue){
    let newNumber = img + "" + newValue;
    let oldNumber  = img + "" + oldValue;
    var index = this.state.newArray.indexOf(oldNumber);
    let tempArray = this.state.newArray;
    if (index !== -1) {
      tempArray[index] = newNumber;
      this.setState({newArray:tempArray})
    }
  }
  playAgain(){
    this.setState({imgId:"", divId:"",newArray:[], quizComplete:false})
  }
  render() {
    if(this.state.quizComplete){
      return(
        <div>
         <h2>Wow! you have done it. Jai Ho Bappa Ki</h2>
         <button onClick={()=>this.playAgain()}>Play Again</button>
        </div>
      )
    }
    
    if(this.props.dataImages){
      
      
      const listItems =  this.props.dataImages.map((item,index) =>
      
        <div id={"div_" + item.index}  key={index} className="mdl-cell mdl-cell--4-col dropClass margin-zero padding-zero border-1px" onDragOver={(event) => this.allowDrop(event)} draggable="true" onDrop={(event) =>this.dropImg(event)} onDragStart={(event) => this.drag(event)} ><img id={item.index}  className="dropClass" onDragOver={(event) => this.allowDrop(event)} id= {"img_" + item.index} key={index} draggable="true" onDrop={(event) =>this.dropImg(event)} onDragStart={(event) => this.drag(event)} src={item.data} alt=""/></div>
      )
      return (
        <div className="mdl-grid">
            <div className="mdl-cell--6-col">
              <div className="mdl-grid mdl-cell--12-col">
               {listItems}
                  
              </div>
            </div>
            <div className="mdl-cell--6-col">
              <div className="mdl-grid mdl-cell--12-col">
                <div id="sec_1" onDrop={(event) => this.dropDiv(event)} onDragOver={(event) => this.allowDrop(event)}  className="mdl-cell mdl-cell--4-col dropClass border-1px margin-zero padding-zero"></div>
                <div id="sec_2" onDrop={(event) => this.dropDiv(event)} onDragOver={(event) => this.allowDrop(event)} className="mdl-cell mdl-cell--4-col dropClass border-1px margin-zero padding-zero"></div>
                <div id="sec_3" onDrop={(event) => this.dropDiv(event)} onDragOver={(event) => this.allowDrop(event)} className="mdl-cell mdl-cell--4-col dropClass border-1px margin-zero padding-zero"></div>
                <div id="sec_4" onDrop={(event) => this.dropDiv(event)} onDragOver={(event) => this.allowDrop(event)} className="mdl-cell mdl-cell--4-col dropClass border-1px margin-zero padding-zero"></div>
                <div id="sec_5" onDrop={(event) => this.dropDiv(event)} onDragOver={(event) => this.allowDrop(event)} className="mdl-cell mdl-cell--4-col dropClass border-1px margin-zero padding-zero"></div>
                <div id="sec_6" onDrop={(event) => this.dropDiv(event)} onDragOver={(event) => this.allowDrop(event)} className="mdl-cell mdl-cell--4-col dropClass border-1px margin-zero padding-zero"></div>
                <div id="sec_7" onDrop={(event) => this.dropDiv(event)} onDragOver={(event) => this.allowDrop(event)} className="mdl-cell mdl-cell--4-col dropClass border-1px margin-zero padding-zero"></div>
                <div id="sec_8" onDrop={(event) => this.dropDiv(event)} onDragOver={(event) => this.allowDrop(event)} className="mdl-cell mdl-cell--4-col dropClass border-1px margin-zero padding-zero"></div>
                <div id="sec_9" onDrop={(event) => this.dropDiv(event)} onDragOver={(event) => this.allowDrop(event)} className="mdl-cell mdl-cell--4-col dropClass border-1px margin-zero padding-zero"></div>
              </div>
            </div>
        </div>
      
        );
    }
    return (
      <h2>He7</h2>
    );
  }
}
 
export default Puzzle;
