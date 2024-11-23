import axios from "axios";
import { LOCAL_SERVER_PATH } from "./variables"

export const api = axios.create({
  baseURL: LOCAL_SERVER_PATH,
})