import React, { useState } from 'react';
import './RightSideBar.css';
import NavItem from '../Navitem/Navitem';
import Gatepass from '../In-Out-Gate-Pass/Gatepass';
import { ReactDOM } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'

const RightSideBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const navigate = useNavigate();

  const handleItemClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleOptionClick = (item) => {
    setSelectedItem(item);
    setShowDropdown(false);
    if (item === 'GatePass') {
      navigate('/gate-pass');
    }
  };

  return (
    <div className="notifications">
      <div className="notification-screen">
        <div className="notification-inner">
          <div className="h-100">
            <div className="chatbox">
              <img src="image.png" alt="Company Logo" className="chatboat-profile" />
              <span className="chatbot-desc">Hi, Keval Here choose one option</span>
            </div>
            <ul className="navigation">
              <NavItem text="Menu" onClick={handleItemClick} />
              <NavItem text="Notifications" />
              <NavItem text="Most Searched" />
            </ul>
          </div>
        </div>
      </div>
      {showDropdown && (
        <div className="dropdown">
          <div className="dropdown">
            <button className='dropdown-buttons-menu'style={{margin: '6px'}} onClick={() => handleOptionClick('GatePass')}>GatePass</button>
            <button className='dropdown-buttons-menu' style={{margin: '6px'}} onClick={() => handleOptionClick('Palledar')}>Palledar</button>
            <button className='dropdown-buttons-menu' style={{margin: '6px'}} onClick={() => handleOptionClick('Palledar')}>Packing</button>
            {/* Add more options */}
          </div>
        </div>
      )}
      {/* {selectedItem === 'Palledar' && <PalledarOne />} */}
    </div>
  );
};

export default RightSideBar;
