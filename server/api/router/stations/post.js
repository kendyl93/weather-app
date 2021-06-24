const axios = require("axios")

const post = async (req, res) => {
  axios
    .post(
      "http://api.openweathermap.org/data/3.0/stations?appid=d205e1b1959769a0b07b981d2c123252",
      req.body
    )
    .then((response) => {
      return res.send(response.data)
    })
    .catch(() => {
      res.status(500).send("error")
    })
}

module.exports = post
