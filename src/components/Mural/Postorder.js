import axios from "axios";

const instance = axios.create({
  baseURL: "lumniauth.firebaseapp.com"
});

export default instance;