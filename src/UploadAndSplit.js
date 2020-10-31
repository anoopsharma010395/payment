import React, { Component } from "react";
 
class UploadAndSplit extends Component {
  constructor(props)
  {
    super(props);
    this.state ={imageValue:""}
    this.myRef1 = React.createRef();
    this.myRef2 = React.createRef();
  }
  imageUploaded(e)
  {
  
    var canvas=this.myRef1.current;
    var ctx=canvas.getContext("2d"); 
    var URL = window.webkitURL || window.URL;
        var url = URL.createObjectURL(e.target.files[0]);
        var img = new Image();
        var self =this;
        img.onload = function() {
                canvas.width=img.width;
                canvas.height = img.height;
                ctx.drawImage(img,0,0);
                ctx.fillStyle="black";
                ctx.fillRect(0,canvas.height-30,canvas.width,30);
                ctx.fillStyle="white";
                ctx.font="18px verdana";
                ctx.fillText("I'm OK with CORS!",5,canvas.height-8);
                self.create();
        }
        img.src = url;
  }
  
  create(){
    var img = new Image();
    var canvas=this.myRef1.current;
    img.src=canvas.toDataURL();
    //img.onload=this.start(img,ref2);
    var self = this;
    img.onload= function() {
      var canvas=self.myRef2.current;
      var ctx=canvas.getContext("2d");
      var cw=canvas.width;
      var ch=canvas.height;
    
      var rows=[0,1,2];
      var cols=[0,1,2];
      
    
      var iw=canvas.width=img.width;
      var ih=canvas.height=img.height;
      var pieceWidth=iw/cols.length;
      var pieceHeight=ih/rows.length;
    
      var pieces = [
        {col:0,row:0},
        {col:1,row:0},
        {col:2,row:0},
        {col:0,row:1},
        {col:1,row:1},
        {col:2,row:1},
        {col:0,row:2},
        {col:1,row:2},
        {col:2,row:2},
      ]
        let imageData = []
        var i=0;
            rows.forEach(function(y){
              cols.forEach(function(x){
                let p=pieces[i++];
                var canvas=self.myRef2.current;
                
                let ctx1=canvas.getContext("2d");
                canvas.width=pieceWidth;
                canvas.height = pieceHeight;
               
                ctx1.drawImage(img,
                  x*pieceWidth, y*pieceHeight, pieceWidth, pieceHeight,0,0,pieceWidth,pieceWidth
               );
               
                let tempData ={};
                tempData.data = canvas.toDataURL();
                tempData.index= i;
                ctx1.clearRect(0, 0, canvas.width, canvas.height);
                imageData.push(tempData)
              })
            })
             
          //}
        //}
          let randomArray = imageData.sort( () => Math.random() - 0.5);
          self.props.imageUploaded(randomArray);
          self.props.history.push('/puzzle-2');
    }
  }
  render() {
    return (
      <div className="mdl-grid mdl-cell mdl-cell--12-col justify-content-center ">
        <input className="text-align-right" type="file"  value= {this.state.imageValue} onChange = {(event)=> this.imageUploaded(event)} />
        <canvas id="canvas1" hidden width="60" height="60" ref={this.myRef1} draggable="true" />
        <canvas id="canvas2" width="60" height="60" ref={this.myRef2} draggable="true" />
      </div>
    );
  }
}
 
export default UploadAndSplit;
