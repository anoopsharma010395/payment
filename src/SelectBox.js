import React from 'react';

const SelectBox= ({value,handleChange}) =>{

    return(
        <div id='enclosingDiv' >
            <div className="mdl-grid"><h4 className="mdl-cell">My Finance Calculator</h4></div>
            <div className="mdl-grid">
                <label id='typeLabel' className="mdl-cell mdl-cell--3-col bold medium-font">Select Type Of Instrument</label>
                <select type="select" className="mdl-cell mdl-cell--4-col" id="selectInstrument" value={value} onChange={(event)=>handleChange(event)}>
                    <option id="sel" value="SEL">Select</option>
                    <option id="fd" value="FD">Fixed Deposit</option>
                    <option id="rd" value="RD">Recurring Deposit</option>
                    <option id="int" value="INT">Interest Calculator</option>
                    <option id="emi" value="EMI">EMI Calculator</option>
                    <option id="inp" value="INP">Investment Plan Calculator</option>
                </select>
                {/* We will add it later
                 <div className="mdl-cell mdl-cell--2-col"></div>
                <label id='valuelabel' className="mdl-cell mdl-cell--2-col">Accept Terms & Conditions</label>
                <input type="radio" className="mdl-cell mdl-cell--1-col MarginAuto" id="terms_condition"/> */}
            </div>
      </div>
    )
}
export default SelectBox;