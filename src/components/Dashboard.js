import React from 'react';
import HomePage from './Home-Page/Home-Page';
import LeftSideBar from './Left-Side-Bar/LeftSideBar';
import RightSideBar from './Right-Side-Bar/RightSideBar';
import '../App.css';
import Gatepass from './In-Out-Gate-Pass/Gatepass';

function Dashboard() {
  return (
    <div className="App dashboard">
      {/* <LeftSideBar /> */}
      <HomePage />
      {/* <Gatepass /> */}
      <RightSideBar />
    </div>
  )
}

export default Dashboard