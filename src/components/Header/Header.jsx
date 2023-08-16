import React, { useEffect, useState } from "react";
import "./header.css";
import { useSelector } from "react-redux";
import axios from "axios";
import User from "../Auth/User";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  
  const page = useSelector((state) => state.page.page); //current page state

  const user = useSelector((state) => state.user); //currently logged in user state
  
  const [showDropdown, setShowDropdown] = useState(false); // profile dropdown state


  const [users, setUsers] = useState([]); // user state
  
  //open dropdown action
  const showDropdownHandler = () => {
    setShowDropdown((prev) => !prev);
  };
  
  //fetch users
  useEffect(() => {
    const getUsers = async () => {
      const fetchedUsers = await axios.get(
        "https://panorbit.in/api/users.json"
      );
      setUsers(fetchedUsers.data.users);
    };
    getUsers();
  }, []);

  //signout action
  const signoutHandler = () => {
    navigate("/");
  };

  return (
    <div className="headerContainer">
      <span className="header">{page}</span>
      <div className="rightProf">
        <div className="prof" onClick={showDropdownHandler}>
          {<img src={user.profilepicture} className="pfp" />}
          {user.name}
        </div>
        <div className={showDropdown ? "dropdown" : "noDropdown"}>
          <div>
            <div className="userDiv">
              <img src={user.profilepicture} className="dropdownpfp" />
              {user.name}
              <span className="username">{user.username}</span>
            </div>
          </div>

          {/* filter and show 2-3 other users for account switching */}
          {users
            .slice(0, 3)
            .filter((usr) => usr.name != user.name)
            .map((user) => (
              <div className="dropdownUser" onClick={showDropdownHandler}>
                <User user={user} />
              </div>
            ))}
          <button className="signout" onClick={signoutHandler}>
            Sign out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
