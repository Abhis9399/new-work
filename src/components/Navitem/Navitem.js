import React from 'react';

const NavItem = ({ icon, text, selected, onClick }) => {
  return (
    <li
      className={`nav-item ${selected ? 'selected' : ''}`}
      onClick={onClick}
    >
      {/* <span className="nav-icon">{icon}</span> */}
      <span className="nav-text">{text}</span>
    </li>
  );
};

export default NavItem;