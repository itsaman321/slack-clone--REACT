import React, { useState } from "react";
import "./Header.css";
// import Avatar from "@mui/icons-material/AccountCircle";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SearchIcon from "@mui/icons-material/Search";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ user }] = useStateValue();
  return (
    <div className="header">
      <div className="header__left">
        <div className="header__avatar">
          <img
            alt={user && user.displayName}
            src={user && user.photoURL}
            width={30}
            height={30}
          />
        </div>
        <div>
          <AccessTimeIcon />
        </div>
      </div>
      <div className="header__search">
        <SearchIcon />
        <input placeholder="Search in the chats ..." />
      </div>
      <div className="header__right">
        <HelpOutlineIcon />
      </div>
    </div>
  );
}

export default Header;
