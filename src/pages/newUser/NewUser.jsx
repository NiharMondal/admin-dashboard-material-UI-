import React from 'react';
import './NewUser.css'
const NewUser = () => {
  return (
    <div className="newUser">
      <h1 className="newUser_title">New User</h1>
      <form className="newUser_form">
        <div className="newUser_item">
          <label htmlFor="">User Name</label>
          <input type="text" placeholder="John" />
        </div>
        <div className="newUser_item">
          <label htmlFor="">Full Name</label>
          <input type="text" placeholder="John Smith" />
        </div>
        <div className="newUser_item">
          <label htmlFor="">Email</label>
          <input type="email" placeholder="john@gmail.com" />
        </div>
        <div className="newUser_item">
          <label htmlFor="">Password</label>
          <input type="password" placeholder="Password" />
        </div>
        <div className="newUser_item">
          <label htmlFor="">Phone</label>
          <input type="text" placeholder="+1 123 456 78" />
        </div>
        <div className="newUser_item">
          <label htmlFor="">Address</label>
          <input type="text" placeholder="New York | USA" />
        </div>
        <div className="newUser_item">
          <label htmlFor="">Gender</label>
          <div className="newUser_gender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="female">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="other">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Other</label>
          </div>
        </div>
        <div className="newUser_item">
          <label >Active</label>
          <select name="active" id="active"
            className="newUser_select">
              <option value="yes">Yes</option>
              <option value="no">No</option>
          </select>
        </div>
      </form>
      <button className="newUser_btn ">Create</button>
    </div>
  );
};

export default NewUser;