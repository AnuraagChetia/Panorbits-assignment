import React from "react";
import { useDispatch } from "react-redux";
import { userActons } from "../../store/userReducer";

const User = (props) => {

  const dispatch = useDispatch();

  //login button action
  const loginHandler = () => {
    dispatch(userActons.getUser(props.user));
  };
  
  return (
    <>
      <li className="userLi" onClick={loginHandler}>
        {<img src={props.user.profilepicture} className="pfp"></img>}
        {props.user.name}
      </li>
    </>
  );
};

export default User;
