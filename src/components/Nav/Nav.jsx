import React from "react";
import "./nav.css";
import { useDispatch } from "react-redux";
import { pageActions } from "../../store/pageReducer";

const Nav = () => {

  const dispatch = useDispatch();

  //page change action
  const pageChangeHandler = (e) => {
    const page = e.target.innerHTML;
    dispatch(pageActions.setPage(page));
  };
  
  return (
    <>
      <ul className="navContainer">
        <li onClick={pageChangeHandler}>Profile</li>
        <li onClick={pageChangeHandler}>Posts</li>
        <li onClick={pageChangeHandler}>Gallery</li>
        <li onClick={pageChangeHandler}>ToDo</li>
      </ul>
    </>
  );
};

export default Nav;
