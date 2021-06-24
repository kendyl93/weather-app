import axios from "axios"
import ENV from "../env"

const instance = axios.create({
  baseURL: "https://tile.openweathermap.org/map/",
  responseType: "blob",
})
instance.interceptors.request.use(
  (config) => {
    config.url = `${config.url}?appid=${ENV.API_KEY}`
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

export default instance
