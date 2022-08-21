import React, { useEffect, useState } from "react";
import "./chat.css";
import { useParams } from "react-router-dom";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import db from "./firebase";
import ChatInput from "./ChatInput";
import Message from "./Message.js";
function Chat() {
  let { roomId } = useParams();

  const [roomDetails, setRoomDetails] = useState(null);
  const [roomMessages, setRoomMessages] = useState([]);
  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(`${roomId}`)
        .onSnapshot((snapshot) => setRoomDetails(snapshot.data()));
      db.collection("rooms")
        .doc(`${roomId}`)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) =>
          setRoomMessages(
            snapshot.docs.map((doc) => {
              return doc.data();
            })
          )
        );
    }
  }, [roomId]);

  return (
    <div className="chat">
      <div className="chat__header">
        <div chat="chat__headerLeft">
          <h4 className="chat__channelName">
            <strong>#{roomDetails && roomDetails.name}</strong>
            <StarBorderIcon />
          </h4>
        </div>
        <div className="chat__headerRight">
          <p>
            <InfoOutlinedIcon />
            Details
          </p>
        </div>
      </div>

      <div className="chat_messages">
        {roomMessages.map((msg) => (
          <Message
            message={msg.message}
            user={msg.user}
            userImage={msg.userImage}
            timestamp={msg.timestamp}
          />
        ))}
      </div>

      <ChatInput
        channelName={roomDetails && roomDetails.name}
        channelId={roomId}
      />
    </div>
  );
}

export default Chat;
