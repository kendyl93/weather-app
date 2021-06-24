const express = require("express")
const stationsRoutes = require("./router/stations")

const router = express.Router()

router.use("/stations", stationsRoutes)

module.exports = router
