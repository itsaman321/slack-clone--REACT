import React from "react";
import "./sidebarOption.css";
import { useNavigate } from "react-router-dom";
import db from "./firebase";

function SidebarOption({ Icon, title, id, addChannelOption }) {
  const nav = useNavigate();

  const selectChannelOption = () => {
    if (id) {
      nav(`/room/${id}`);
    } else {
      nav(title);
    }
  };

  const addChannel = () => {
    const channelName = prompt("Please enter the Channel Name");
    if (channelName) {
      db.collection("rooms").add({
        name: channelName,
      });
    }
  };

  return (
    <div
      className="sidebarOption"
      onClick={addChannelOption ? addChannel : selectChannelOption}
    >
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className="sidebarOption__channel">
          <span className="sidebarOption__hash"># {title}</span>
        </h3>
      )}
    </div>
  );
}

export default SidebarOption;
