import { io } from "socket.io-client";
import { LOCAL_SERVER_PATH } from "./variables";

export const commentsSocket = io(LOCAL_SERVER_PATH, {
  withCredentials: true,
})