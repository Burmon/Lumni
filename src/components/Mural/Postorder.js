import axios from "axios";

const instance = axios.create({
  baseURL: "lumniauth.appspot.com"
});

export default instance;