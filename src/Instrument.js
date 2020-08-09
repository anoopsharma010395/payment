import React from 'react';

class Instrument extends React.Component{
    // var handleSubmit =function (event){
    //     console.log(event);
    // }
    constructor(props){
        super(props);
        this.state={principalAmount:"",yearValue:"",monthValue:""}
    }
    handleSubmit(event){
        let validation= this.valiadateForm();
        if(validation.isValid){
            let years = this.calculateYearsMonths(this.state.yearValue,this.state.monthValue);
            this.calCulateInstrument(this.props.value,this.state.principalAmount,years);
        }
        else{
            this.setState({principalAmount:"",yearValue:"",monthValue:""});
            alert(validation.error)
        }
        event.preventDefault();
    }
    onYearsChange(event){
        this.setState({yearValue:event.target.value})
    }
    onMonthChange(event){
        this.setState({monthValue:event.target.value})
    }
    onAmountChange(event){
        this.setState({principalAmount:event.target.value})
    }
    calculateYearsMonths(years,months){
        if(+months)
            return ( years = +years + months/12);
        else return years;
    }
    calCulateInstrument(value,amount,years){
        const rates={"FD":{0:7,1:7.5,2:7.75,3:8}};
        let rate= rates[value];
        var temp = Math.floor(years);
        if(temp>3) var tempRate=8.1;
        else tempRate= rate[temp];
        let totalAmount = amount*Math.pow(1+tempRate/100,years)
        alert(totalAmount);
    }
    valiadateForm(){
        let validationObject ={isValid:true,error:null};
        if(+this.state.principalAmount<=0 || (this.state.yearValue =='0' && this.state.monthValue=='0'))
        {
            validationObject.isValid=false;
            validationObject.error="Please input correct values";
            return validationObject;
        }
        return validationObject;
    }
    render(){return(
        <div id='enclosingDiv' >
            <form className="mdl-grid" onSubmit={(event)=>this.handleSubmit(event)}>
                <div className="mdl-cell mdl-cell--4-col">
                    <label className="bold medium-font">Enter Amount: </label>
                    <input type="number" required value={this.state.principalAmount} onChange={(event)=>this.onAmountChange(event)}></input>
                </div>
                <div className="mdl-cell mdl-cell--4-col">
                    <label className="bold medium-font">
                    Select Years: 
                    </label>
                    <select value={this.state.yearValue} required onChange={(event)=>this.onYearsChange(event)} >
                        <option value="">Select Years</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                    
                </div>
                <div className="mdl-cell mdl-cell--4-col">
                    <label className="bold medium-font">
                    Select Months: 
                    </label>
                    <select value={this.state.monthValue} required onChange={(event)=>this.onMonthChange(event)}>
                        <option value="">Select Months:</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="9">11</option>
                        <option value="10">12</option>
                    </select>
                    
                </div>
                
                <div className="mdl-cell mdl-cell--12-col"></div>
                <div className="mdl-cell mdl-cell--12-col"></div>
                <div className="mdl-cell mdl-cell--12-col"></div>

                <div className="mdl-cell mdl-cell--12-col">
                    <input className="submitButton" type="submit" value="Submit" />
                </div>
            </form>
        </div>
    )
}
}
export default Instrument;