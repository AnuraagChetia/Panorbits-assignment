import React, { useEffect, useState } from "react";
import "./chatbox.css"; // Create a CSS file for styling
import axios from "axios";

const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false); //chatbox open states

  const [selectedUser, setSelectedUser] = useState(null); //user state for chatbox

  const [userChatMinimized, setUserChatMinimized] = useState(false); //state for minimize and maximize

  const [users, setUsers] = useState([]); // user state

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

  //chatbox open action
  const toggleChatBox = () => {
    setIsOpen(!isOpen);
  };

  //user chat open action
  const openUserChat = (user) => {
    setSelectedUser(user);
  };

  //minimize or maximize chat action
  const minimizeUserChat = () => {
    setUserChatMinimized(!userChatMinimized);
  };

  return (
    <div className={`chat-box ${isOpen ? "open" : ""}`}>
      <div className="chat-toggle" onClick={toggleChatBox}>
        Chat
      </div>

      {/* check if isOpen and show the list of users is true */}
      {isOpen && (
        <div className="user-list">
          {users.map((user) => (
            <div className="user" onClick={() => openUserChat(user.name)}>
              {<img src={user.profilepicture} className="pfp" />}
              {user.name}
            </div>
          ))}
        </div>
      )}

      {/* check if we clicked on a user chatbox and open the userchat box if true  */}
      {selectedUser && (
        <div
          onClick={minimizeUserChat}
          className={`user-chat ${userChatMinimized ? "minimized" : ""}`}
        >
          <div className="chat-header">
            <p>{selectedUser}</p>
            <div className="chat-buttons">
              <button onClick={() => setSelectedUser(null)}>X</button>
            </div>
          </div>

          {/* show inbox if chat is not minimized */}
          {!userChatMinimized && (
            <div className="messages">
              {/* Dummy messages */}
              <div className="message">Hello from {selectedUser}</div>
              <div className="message">How are you?</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ChatBox;
