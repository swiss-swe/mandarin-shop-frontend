import axios from "axios";

axios.defaults.baseURL = "https://dummyjson.com";

axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("user_token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    config.headers["Accsess-Control-Allow-Origin"] = "*";
    return config;
  },
  (error) => Promise.reject(error)
);

export default axios;
