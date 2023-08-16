import React, { useEffect, useState } from "react";
import "./auth.css";
import axios from "axios";
import User from "./User";
import { NavLink } from "react-router-dom";

const Auth = () => {
  
  const [users, setUsers] = useState([]); // user state

  //fetch users from api
  useEffect(() => {
    const getUsers = async () => {
      const fetchedUsers = await axios.get(
        "https://panorbit.in/api/users.json"
      );
      setUsers(fetchedUsers.data.users);
    };
    getUsers();
  }, []);

  return (
    <div className="auth">
      <h4 className="title">Select an account</h4>
      <ul className="userList">
        {users.map((user, index) => (
          <NavLink to="/home">
            <User user={user} key={index} />
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default Auth;
