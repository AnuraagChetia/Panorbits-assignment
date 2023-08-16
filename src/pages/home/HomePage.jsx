import React from "react";
import Nav from "../../components/Nav/Nav";
import "./homepage.css";
import Header from "../../components/Header/Header";
import Profile from "../../components/Profile/Profile";
import { useSelector } from "react-redux";
import ComingSoon from "../../components/ComingSoon/ComingSoon";

const HomePage = () => {
  const page = useSelector((state) => state.page.page); // current page state
  return (
    <>
      <div className="homePage">
        <Nav />
        <div className="profile">
          <Header />
          {page == "Profile" ? <Profile /> : <ComingSoon />}
        </div>
      </div>
    </>
  );
};

export default HomePage;
