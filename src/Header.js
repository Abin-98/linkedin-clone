import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import linked from "./assets/icons/linkedin-svgrepo-com.svg";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import CommentIcon from "@mui/icons-material/Comment";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { logout } from "./features/userSlice";

const Header = () => {
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <div className="header">

      <div className="header__container">
        <div className="header__left">
          <img src={linked} alt="" />
          <div className="header__search">
            <SearchIcon />
            <input type="text" placeholder="Search" />
          </div>
        </div>

        <div className="header__right">
          <HeaderOption Icon={HomeIcon} title="Home" />
          <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
          <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
          <HeaderOption Icon={CommentIcon} title="Messaging" />
          <HeaderOption Icon={NotificationsIcon} title="Notifications" />
          <HeaderOption avatar={true} title="Me" onClick={logoutOfApp} />
        </div>

      </div>
    </div>
  );
};

export default Header;
