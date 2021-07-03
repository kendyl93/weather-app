import axios from "axios";
import ENV from "../env";

const instance = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
});
instance.interceptors.request.use(
  (config) => {
    console.log({ ENV });
    config.url = `${config.url}&units=metric&appid=${ENV.REACT_APP_API_KEY}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default instance;
