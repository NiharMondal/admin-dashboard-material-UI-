import React from 'react';
import './Topbar.css'
import {Notifications,Language, Settings} from "@material-ui/icons";
const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbar_wrapper">
        <div className="topLeft">
          <span className="logo">Creative Nihar</span>
        </div>
        <div className="topRight">
          <div className="topbarIconsContainer">
            <Notifications />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconsContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconsContainer">
            <Settings />
          </div>
          <img
            src="https://images.unsplash.com/photo-1552168212-9ceb61083ba0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
            alt=""
            className="topAvator"
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;