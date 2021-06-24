const apiRouter = require("./api/index")
const express = require("express")
const cors = require("cors")
const app = express()
const PORT = 4000
const ENDPOINT = "http://localhost:3000"

app.use(cors({ origin: ENDPOINT }))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use("/api", apiRouter)

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.info(`Server listening at http://localhost:${PORT}`)
})
