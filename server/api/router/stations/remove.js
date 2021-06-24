const axios = require("axios")

const remove = (req, res) => {
  const stationId = req.params.id

  axios
    .delete(
      `http://api.openweathermap.org/data/3.0/stations/${stationId}?appid=d205e1b1959769a0b07b981d2c123252`
    )
    .then(() => {
      res.status(200).send({ stationId })
    })
    .catch(() => {
      res.status(500).send("error")
    })
}

module.exports = remove
