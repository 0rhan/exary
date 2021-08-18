import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://0.0.0.0:3030",
});

export default axiosInstance;

