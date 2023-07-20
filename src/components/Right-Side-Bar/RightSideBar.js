import React, { useState } from 'react';
import './RightSideBar.css';
import NavItem from '../Navitem/Navitem';

// const [selectedItem, setSelectedItem] = useState('');

//   const handleItemClick = (item) => {
//     setSelectedItem(item);
//   };

const GatePassHistory = () => {
    return (
        <div className="notify" style={{backgroundColor: 'white'}}>
            <div className="inner-widges"></div>
            <div className="inner-widges"></div>
        </div>
    );
};

const Notify = () => {
    const [selectedItem, setSelectedItem] = useState('');

    const handleItemClick = (item) => {
        setSelectedItem(item);
      };
    
    return (
      <div className="notify notification-screen">
        <div className="notification-inner">
            <div className="h-100">
            <div className="chatbox">
               <img src="image.png" alt="Company Logo" className="chatboat-profile" />
               <span className="chatbot-desc">Hi, Keval Here choose one option</span>
            </div>
            <ul className="navigation">
                <NavItem text="Menu" selected={selectedItem === 'Menu'} onClick={() => handleItemClick('Menu')}/>
                <NavItem text="Notifications" selected={selectedItem === 'Notifications'} onClick={() => handleItemClick('Notification')}/>
                <NavItem text="Most Searched" selected={selectedItem === 'Most Searched'} onClick={() => handleItemClick('Most Searched')} />
           </ul>
           </div>
        </div>
      </div>
    );
  };

const RightSideBar = () => {
  return (
    <div className="notifications">
        <Notify />
        <GatePassHistory />
  
    </div>
  );
};

export default RightSideBar;