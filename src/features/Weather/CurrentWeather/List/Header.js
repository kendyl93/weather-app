import React from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/styles"
import { Typography } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  wrapper: {
    marginBottom: "16px",
  },
  cityNameWrapper: {
    fontWeight: 700,
  },
}))

const Header = ({ cityName }) => {
  const classes = useStyles()

  return cityName ? (
    <Typography classes={{ root: classes.wrapper }}>
      Current weather for <span className={classes.cityNameWrapper}>{cityName}</span>
    </Typography>
  ) : (
    <></>
  )
}

Header.propTypes = {
  cityName: PropTypes.string,
}

export default Header
