import classNames from "classnames/bind";
import io from "socket.io-client";
import { useEffect, useState } from "react";

import style from "./Home.module.scss";

const cx = classNames.bind(style);
const socket = io.connect("http://localhost:3001");

function Home() {
  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState("");
  const sendMessage = () => {
    socket.emit("send_message", { message });
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageReceived(data);
    });
    // eslint-disable-next-line
  }, [socket]);

  return (
    <>
      <input
        placeholder="Mesage..."
        onChange={(event) => {
          setMessage(event.target.value);
        }}
      />
      <button onClick={sendMessage}>Send Message</button>
      <h1 className={cx("text-color")}>Tin nhan</h1>
      {messageReceived}
    </>
  );
}

export default Home;
