import React from "react"
import IconButton from "@material-ui/core/IconButton"
import InputAdornment from "@material-ui/core/InputAdornment"
import SearchIcon from "@material-ui/icons/Search"

const EndAdornment = () => (
  <InputAdornment>
    <IconButton type="submit">
      <SearchIcon />
    </IconButton>
  </InputAdornment>
)

export default EndAdornment
