import './App.css';

function ConfirmationComponent(props) {
  return (
    <div className="mdl-grid">
       <div className="mdl-cell--4-col mdl-card mdl-cell">
              <div>Product: ABCD</div>
              <div>Date: 08/09/2019 12:03:44</div>
              <div>Amount: 112.03 USD</div>
             
              <br/><div className={props.responseData.data.responseCode == 1? 'failed-color': 'success-color'}>{props.responseData.data.responseMessage}</div><br/>
              <div className={props.responseData.data.responseCode == 1? 'failed-color': 'success-color'}>Invoice number: {props.responseData.data.invoiceNo}</div>
        </div>
    </div>
  );
}

export default ConfirmationComponent;
