import React from 'react';
import './App.css';
import Api from './apis';



class UserDetails extends React.Component{
    constructor(props)
        {
            super(props);
            this.state= {cardTypes:[{id:0,value:"Select card type"}],selectedCard : "", cardNumber:"",expiry:"",name:"",email:"",isValidFields:false}
        }
        inputChanged(event){
            console.log(event);
            this.setState({[event.target.name]: event.target.value},()=>{this.validate(event.target.name,event.target.value)});
            //}
            
        }
        validate(field,value){
            let isValid = false;
            if(field =='cardNumber' && this.state.selectedCard == "Amex")
                {
                    isValid = value.length == 15 ? true : false;
                }
            else if(field =='cardNumber' && this.state.selectedCard != "Amex")
                {isValid = value.length == 16 ? true : false;}
            else if(field =='expiry'){
                let temp = value.split('/');
                if (temp[0] >=1 && temp[0]<=12)
                    isValid =true; 
                }   
            else if(field =='name'){
                isValid =true;
                }
            else if(field =='email'){
                isValid =true;
                }
            if(this.state.cardNumber && this.state.expiry && this.state.name && this.state.selectedCard)
            {
                this.setState({isValidFields: isValid})
            }
            
        }
        submit(){
                var self = this;
                    //success API
                    Api.get("http://www.mocky.io/v2/5d8de422310000b19d2b517a").then(function(response){
                        console.log(response);
                        self.props.passData(response);
                        self.props.history.push('/confirmation');
                    }).catch(function (error) {
                        // handle error
                       alert(error)
                      }); 
        }

    render(){
        const cardSelect = this.state.cardTypes.map(function(item){
                   //if(item == "visa" || item == "amex" || item == "master")
                        return  <option value={item.value} key={item.id}>{item.value}</option>
            })
        return (
            <div className = "mdl-grid top-0px justify-content-center margin-l-0px">
                <div className ="mdl-cell--4-col mdl-cell--2-col-tablet mdl-card mdl-cell ">
                <div>Product: ABCD</div>
                <div>Date: 08/09/2019 12:03:44</div>
                <div>Amount: 112.03 USD</div>
                </div>
            <div className = "mdl-cell--8-col mdl-cell--6-col-tablet mdl-card mdl-cell ">
            <div className="mdl-grid top-0px">
                <div className = "mdl-cell mdl-cell--12-col top-0px margin-l-0px">
                    <label>Select card type</label>
                    <select name="selectedCard" id= "cardType" onChange={(event)=>this.inputChanged(event)} onClick={()=>this.getCardData()}>{cardSelect}</select>
                </div>
                <div className = "mdl-cell mdl-cell--12-col margin-l-0px">
                    <label>Card number</label>
                    <input type="number" name ="cardNumber" required onChange={(event)=> this.inputChanged(event)}/>
                </div>
                <div className = "mdl-cell mdl-cell--12-col margin-l-0px">
                    <label>Expiry</label>
                    <input type="text" name ="expiry" required onChange={(event)=> this.inputChanged(event)}/>
                </div>
                <div className = "mdl-cell mdl-cell--12-col margin-l-0px">
                    <label>Name</label>
                    <input type="text" name ="name" required onChange={(event)=> this.inputChanged(event)}/>
                </div>
                <div className = "mdl-cell mdl-cell--12-col margin-l-0px">
                    <label>Email</label>
                    <input type="text" name = "email" onChange={(event)=> this.inputChanged(event)}/>
                </div>
                <div className = "mdl-cell mdl-cell--12-col">
                    <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" disabled={!this.state.isValidFields} onClick={()=>this.submit()}>Confirm Payment</button>
                </div>
                
            </div>
            </div>
            </div>
        )
    }
    async getCardData(){
        const response = await Api.get('http://www.mocky.io/v2/5d145fa22f0000ff3ec4f030',{})
        console.log(response);
        //let temp = {id:1,value:"Select card type"}
        let cardTypes = response.data.cardTypes.filter(function(item){
                            return (item.value === 'Visa' || item.value === 'MasterCard' || item.value === 'Amex')
        })
        
        this.setState({cardTypes:cardTypes});
        this.setState({selectedCard:cardTypes[0].value})
    }
}
export default UserDetails;
