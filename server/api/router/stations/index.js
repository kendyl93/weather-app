const express = require("express")
const remove = require("./remove.js")
const post = require("./post.js")

const router = express.Router()

router.delete("/:id", remove)
router.post("/", post)

module.exports = router
