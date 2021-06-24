import axios from "axios"
import ENV from "../env"

const instance = axios.create({
  baseURL: "http://api.openweathermap.org/data/2.5",
})
instance.interceptors.request.use(
  (config) => {
    config.url = `${config.url}&units=metric&appid=${ENV.API_KEY}`
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

export default instance
