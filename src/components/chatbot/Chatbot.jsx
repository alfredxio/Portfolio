import React, { useState, useEffect } from "react";
import "./chatbot.css";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import img from "../../assets/profile-img3.png";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";
import axios from "axios";
import {BsWechat} from 'react-icons/bs';
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

const Chatbot = () => {
  const chat_history = [];

  const [messages, setMessages] = useState([
    {
      message: "Hello, I'm AI Version of Rohit Raj! Ask me anything!",
      sentTime: "just now",
      sender: "ChatGPT",
    },
  ]);

  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async (message) => {
    console.log("message: " + message);
    const newMessage = {
      message,
      direction: "outgoing",
      sender: "user",
    };
    const newMessages = [...messages, newMessage];
    setMessages(newMessages);
    setIsTyping(true);

    const apiURL = "http://127.0.0.1:5000/api/chatbot";

    await axios
      .post(apiURL, {
        query: message,
        history: chat_history,
      })
      .then((response) => {
        console.log("meaw" + response.data);
        setMessages([
          ...newMessages,
          {
            message: response.data.response,
            sender: "ChatGPT",
          },
        ]);
        chat_history.push([message, response.data.response]);
        console.log("hi" + chat_history);
        setIsTyping(false);
      });
  };

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    document.documentElement.style.overflow = 'hidden'
    console.log("hovered");
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    document.documentElement.style.overflow = 'auto';
  };

  const [isVisible, setIsVisible] = useState(false);


  return (
    <div className="botx">

    <div className={`chatbot ${isVisible?'show':''}`}>
      <div className="head">
        <div className="title"><img src={img} className="imgx"></img><div className="namex">VIRTUAL ROHIT</div></div>
        <div className="close" onClick={()=>setIsVisible(!isVisible)}>x</div>
      </div>
      <MainContainer
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <ChatContainer>
          <MessageList
            scrollBehavior="smooth"
            typingIndicator={
              isTyping ? (
                <TypingIndicator content="Virtual Rohit is typing" />
              ) : null
            }
          >
            {messages.map((message, i) => {
              return <Message key={i} model={message} />;
            })}
          </MessageList>
          <MessageInput placeholder="Type message here" onSend={handleSend} />
        </ChatContainer>
      </MainContainer>
    </div>
    <div className={`chatbot-icon`} ><div className="chaticon" onClick={()=>setIsVisible(!isVisible)}><BsWechat/></div></div>
    </div>
  );
};

export default Chatbot;
