import axios from "axios";

const instance = axios.create({
  baseURL: `https://thebetter.bsgroup.eu`,
});

let token: string = localStorage.getItem("token") ?? "";
token = token.substring(1).slice(0, -1);

instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;

export default instance;
