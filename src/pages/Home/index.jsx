import classNames from "classnames/bind";
import { useContext, useEffect, useState } from "react";
import SocketContext from "~/contexts/SocketContext";
import style from "./Home.module.scss";

const cx = classNames.bind(style);

function Home() {
  const { socket, uid, users } = useContext(SocketContext).SocketState;
  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState("");
  const sendMessage = () => {
    socket.emit("send_message", { message });
  };
  useEffect(() => {
    if (socket) {
      socket.on("receive_message", (data) => {
        setMessageReceived(data.message);
      });
    }
  }, [socket]);
  return (
    <>
      <h2>Socket IO Information:</h2>
      <p>
        Your user ID: <strong>{uid}</strong>
        <br />
        Users online: <strong>{users.length}</strong>
        <br />
        Socket ID: <strong>{socket?.id}</strong>
        <br />
      </p>
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
