import React, { useState } from "react";
import "./chatInput.css";
import db from "./firebase";
import { useStateValue } from "./StateProvider";
import firebase from "firebase";
function ChatInput({ channelName, channelId }) {
  const [input, setInput] = useState();
  const [{ user }] = useStateValue();

  const sendMessage = (e) => {
    e.preventDefault();
    if (channelId) {
      db.collection("rooms")
        .doc(`${channelId}`)
        .collection("messages")
        .add({
          message: input,
          timestamp: firebase.firestore.Timestamp.now(),
          user: user.displayName,
          userImage: user.photoURL,
        });
    }
  };
  return (
    <div className="chatInput">
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message #${channelName && channelName.toLowerCase()}`}
        />

        <button type="submit" onClick={sendMessage}>
          SEND
        </button>
      </form>
    </div>
  );
}

export default ChatInput;
