import { createContext } from "react";
export const defaultSocketContextState = {
  socket: undefined,
  uid: "",
  users: [],
};
export const SocketReducer = (state, action) => {
  console.log(
    "Message recieved - Action: " + action.type + " - Payload: ",
    action.payload
  );
  switch (action.type) {
    case "update_socket":
      return Object.assign(Object.assign({}, state), {
        socket: action.payload,
      });
    case "update_uid":
      return Object.assign(Object.assign({}, state), { uid: action.payload });
    case "update_users":
      return Object.assign(Object.assign({}, state), { users: action.payload });
    case "remove_user":
      return Object.assign(Object.assign({}, state), {
        users: state.users.filter((uid) => uid !== action.payload),
      });
    default:
      return state;
  }
};
const SocketContext = createContext({
  SocketState: defaultSocketContextState,
  SocketDispatch: () => {},
});
export const SocketContextConsumer = SocketContext.Consumer;
export const SocketContextProvider = SocketContext.Provider;
export default SocketContext;
