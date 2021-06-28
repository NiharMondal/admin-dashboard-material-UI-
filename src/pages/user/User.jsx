import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import "./User.css";
const User = () => {
  return (
    <div className="user">
      <div className="userTitle_container">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/new-user">
          <button className="userAdd_btn">Create</button>
        </Link>
      </div>
      <div className="user_container">
        <div className="user_show">
          <div className="userShow_top">
            <img
              src="https://images.unsplash.com/photo-1496440737103-cd596325d314?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
              alt=""
              className="userShow_img"
            />
            <div className="userShowTop_title">
              <span className="userShow_userName">Anna Becker</span>
              <span className="userShow_userTitle">Software Engineer</span>
            </div>
          </div>
          <div className="userShow_bottom">
            <span className="userShow_title">Account Details</span>
            <div className="userShow_info">
              <PermIdentity className="userShow_icon" />
              <span className="userShow_infoTitle">annabeck99</span>
            </div>

            <div className="userShow_info">
              <CalendarToday className="userShow_icon" />
              <span className="userShow_infoTitle">25.11.1994</span>
            </div>
            <span className="userShow_title">Contact Details</span>
            <div className="userShow_info">
              <PhoneAndroid className="userShow_icon" />
              <span className="userShow_infoTitle">+1 123 456 17</span>
            </div>
            <div className="userShow_info">
              <MailOutline className="userShow_icon" />
              <span className="userShow_infoTitle">annabeck99@gmail.com</span>
            </div>
            <div className="userShow_info">
              <LocationSearching className="userShow_icon" />
              <span className="userShow_infoTitle">New York | USA</span>
            </div>
          </div>
        </div>
        <div className="user_update">
          <span className="userUpdate_title">Edit</span>
          <form className="userUpate_form">
            <div className="userUpdate_left">
              <div className="userUpate_item">
                <label>User Name</label>
                <input
                  type="text"
                  placeholder="annabeck99"
                  className="userUpdate_input"
                />
              </div>
              <div className="userUpate_item">
                <label>Full name</label>
                <input
                  type="text"
                  placeholder="Anna Backer"
                  className="userUpdate_input"
                />
              </div>
              <div className="userUpate_item">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="annabeck99@gmail.com"
                  className="userUpdate_input"
                />
              </div>
              <div className="userUpate_item">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="+1 123 456 17"
                  className="userUpdate_input"
                />
              </div>
              <div className="userUpate_item">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="New York | USA"
                  className="userUpdate_input"
                />
              </div>
            </div>
            <div className="userUpdate_right">
              <div className="userUpdate_upload">
                <img
                  src="https://images.unsplash.com/photo-1496440737103-cd596325d314?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                  alt=""
                  className="userUpadate_img"
                />
                <label htmlFor="file">
                  <Publish className="userUpdate_icon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdate_btn">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User;
