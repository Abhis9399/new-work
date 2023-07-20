import React from 'react';
import './Header.css';

function Header() {
  return (
    <div>
        <header className="header">
            <div className="header-left">
                <img src="image 1.png" alt="Company Logo" className="company-logo" />
                <h1 className="company-name">ADHARSH FOOD PRODUCT</h1>
            </div>
      
            <div className="header-right">
                <img src="image.png" alt="User Profile" className="user-profile" />
            </div>
       </header>
    </div>
  )
}

export default Header