import React, { useState } from 'react';
import './LeftSideBar.css';
import NavItem from '../Navitem/Navitem';

const LeftSideBar = () => {
  const [selectedItem, setSelectedItem] = useState('');

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="navbar">
      <div className="logo">
        <img className='logo-img' src="image 1.png" />
        <div className='logo-text'>ADHARSH FOOD<br/>PRODUCTS</div>
      </div>
      <ul className="navigation">
        <NavItem icon={<i className="fa fa-table-columns icons" />} text="Dashboard" selected={selectedItem === 'Dashboard'} onClick={() => handleItemClick('Dashboard')}/>
        <NavItem icon={<i className="fa fa-ticket icons" />} text="In-Out Gate Pass" selected={selectedItem === 'In-Out Gate Pass'} onClick={() => handleItemClick('In-Out Gate Pass')}/>
        <NavItem icon={<i className="fa fa-table-columns icons" />} text="Internal Palledar Work" selected={selectedItem === 'Internal Palledar Work'} onClick={() => handleItemClick('Internal Palledar Work')} />
        <NavItem icon={<i className="fa fa-table-columns icons" />} text="Dhang List" selected={selectedItem === 'Dhang List'} onClick={() => handleItemClick('Dhang List')} />
        <NavItem icon={<i className="fa fa-table-columns icons" />} text="Order Punch" selected={selectedItem === 'Order Punch'} onClick={() => handleItemClick('Order Punch')} />
        <NavItem icon={<i className="fa fa-table-columns icons" />} text="Production" selected={selectedItem === 'Production'} onClick={() => handleItemClick('Production')} />
      </ul>

      <div className='bottom'>
        <div className='secondary-navigation'>
          <ul className="navigation">
            <NavItem icon={<i className="fa-regular fa-bell icons" />} text="Notifications" />
            <NavItem icon={<i className="fa fa-gear icons" />} text="Settings" />
          </ul>
        </div>
        <div className="user-profile">
          {/* <img src="/path/to/profile-pic.png" alt="User Profile" />
          <span className="user-email">user@example.com</span> */}
          
             <img className='user-img' src="image.png" />
             <div className='user-email'>Sakshi Agrawal<br/>sakshi@gmail.com</div>
          
        </div>
      </div>

    </div>
  );
};

export default LeftSideBar;

// export default function LeftSideBar() {
//     return (
//       <div className="left-sidebar p-4">
//         <div className='logo'>
//             <img className='logo-img' src="image 1.png" />
//             <div className='logo-text'>ADHARSH FOOD<br/>PRODUCTS</div>
//         </div>
//         <ul className="navigation">
//         <NavItem icon={<i className="fa fa-home" />} text="Home" />
//         <NavItem icon={<i className="fa fa-info" />} text="About" />
//         <NavItem icon={<i className="fa fa-cog" />} text="Services" />
//       </ul>
//       </div> 
//     );
    
// }