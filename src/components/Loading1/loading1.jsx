import React from 'react';

import { useState } from 'react';




function Loading1() {


//for the x-circle pop-up
const [showPopup, setShowPopup] = useState(false);

const handleClosePopup = () => {
  setShowPopup(false);
};


const HandleNext =()=>{
  
};


  return (
    <div className="container">
    <div className='BOX'>
      <div className="group">
        <div className="header">
          <div className="title">Enter The following Details:</div>
          <div className="separator"></div>
          <div className="x-circle" onClick={() => setShowPopup(true)} >
            <div className='Vector'></div>
          </div>

          {/* for x-circle */}
          {showPopup && (
  <div className="popup">
    <div className="popup-content">
      <div className="popup-header">Options</div>
      <div className="popup-body">
        <div className="popup-option" onClick={handleClosePopup}>
          Cancel
        </div>
        <div className="popup-option">
          Exit
        </div>
        <div className="popup-option">Save</div>
      </div>
    </div>
  </div>
)}
        </div>
        <div className="stepper">
        <div className='stepsHorizontal'>
        <div className='L'></div>
        <div className='R'></div>
          <div className="step completed">1</div>
          </div>
          <div className='stepsHorizontal'>
        <div className='L'></div>
        <div className='R'></div>
          <div className="step completed ">2</div>
          </div>
          <div className='stepsHorizontal'>
        <div className='L'></div>
        <div className='R'></div>
          <div className="step completed ">3</div>
          </div>
          <div className='stepsHorizontal'>
        <div className='L'></div>
        <div className='R'></div>
          <div className="step completed ">4</div>
          </div>
          <div className='stepsHorizontal'>
        <div className='L'></div>
        <div className='R'></div>
          <div className="step completed  ">5</div>
          </div>
          <div className='stepsHorizontal'>
          <div className="step completed ">6</div>
          </div>
        </div>
<div className='row'>
<div className="group">
        <div className="select">
          <div className="label">Total Bag  : </div>
          <div><input className='select-box' type='text' id='total_bag' /></div>
        </div>
        </div>

        <div className="group">
          <div className="select">
            <div className="label">Total Quantity: </div>
            <div> <input className='select-box' type='text' id='total_quantity'  /></div>
        </div>
        
        </div>
        </div>

       
        <div className="button" onClick={HandleNext} >Done</div>
      </div>
      </div>
    </div>
  );
}

export default Loading1;
