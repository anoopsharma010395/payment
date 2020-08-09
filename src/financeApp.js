//All standard imports goes here.
import React from 'react';
import './App.css';
import SelectBox from './SelectBox.js'
import Instrument from './Instrument.js'

  class FinanceApp extends React.Component{
    constructor(props) {
      super(props);
      this.state = {value: 'SEL'};
  
      this.handleChange = this.handleChange.bind(this);
      // this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
      this.setState({value: event.target.value});
    }
    render() {
      if(this.state.value !== 'SEL')
        return(
          <div>
            <SelectBox value={this.state.value} handleChange={this.handleChange}/>
            <label className="mdl-grid mdl-cell mdl-cell--12-col bold large-font justify-content"> {this.state.value} Calculator</label>
            <Instrument value={this.state.value}/>
          </div>
        )
        return(
          <div id='' >
            <SelectBox value={this.state.value} handleChange={this.handleChange}/>
          </div>
      )
  }
}

export default FinanceApp;

