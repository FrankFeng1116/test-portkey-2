import Axios from "axios";

export const axios = Axios.create({
  baseURL: "http://10.10.30.187:3000/api",
});
