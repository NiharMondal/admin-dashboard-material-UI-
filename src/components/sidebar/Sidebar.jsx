import React from 'react';
import './Sidebar.css';
import {
  LineStyle,
  Timeline,
  TrendingUp,
  Person,
  Storefront,
  AttachMoney,
  Assessment,
  Mail,
  DynamicFeed,
  Message,
  WorkOutline,
  Report
} from "@material-ui/icons";
import { Link } from 'react-router-dom';
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar_wrapper">
        <div className="sidebar_menu">
          <h3 className="sidebar_title">
            Dashboard
            <ul className="sidebar_list">
              <Link to="/" className="link">
                <li className="sidebarListItem active">
                  <LineStyle className="sidebarIcon" />
                  Home
                </li>
              </Link>
              <li className="sidebarListItem">
                <Timeline className="sidebarIcon" />
                Analytics
              </li>
              <li className="sidebarListItem">
                <TrendingUp className="sidebarIcon" />
                Sales
              </li>
            </ul>
          </h3>
        </div>
        <div className="sidebar_menu">
          <h3 className="sidebar_title">
            Quick Menu
            <ul className="sidebar_list">
              <Link to="/users" className="link">
                <li className="sidebarListItem">
                  <Person className="sidebarIcon" />
                  Users
                </li>
              </Link>
              <Link to="/products" className="link">
                <li className="sidebarListItem">
                  <Storefront className="sidebarIcon" />
                  Products
                </li>
              </Link>
              <li className="sidebarListItem">
                <AttachMoney className="sidebarIcon" />
                Transactions
              </li>
              <li className="sidebarListItem">
                <Assessment className="sidebarIcon" />
                Repots
              </li>
            </ul>
          </h3>
        </div>
        <div className="sidebar_menu">
          <h3 className="sidebar_title">
            Notifications
            <ul className="sidebar_list">
              <li className="sidebarListItem">
                <Mail className="sidebarIcon" />
                Mail
              </li>
              <li className="sidebarListItem">
                <DynamicFeed className="sidebarIcon" />
                Feedback
              </li>
              <li className="sidebarListItem">
                <Message className="sidebarIcon" />
                Messages
              </li>
            </ul>
          </h3>
        </div>
        <div className="sidebar_menu">
          <h3 className="sidebar_title">
            Staffs
            <ul className="sidebar_list">
              <li className="sidebarListItem">
                <WorkOutline className="sidebarIcon" />
                Manage
              </li>
              <li className="sidebarListItem">
                <Timeline className="sidebarIcon" />
                Analytics
              </li>
              <li className="sidebarListItem">
                <Report className="sidebarIcon" />
                Reports
              </li>
            </ul>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;