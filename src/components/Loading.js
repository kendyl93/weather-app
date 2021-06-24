import React from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/styles"
import CircularProgress from "@material-ui/core/CircularProgress"

const sizeTable = {
  XS: 10,
  SM: 20,
  LG: 30,
}

const useStyles = makeStyles((theme) => ({
  loadingWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
    height: ({ size }) => (size === "LG" ? "100px" : "auto"),
  },
  loading: {
    width: ({ size }) => `${sizeTable[size]}px !important`,
    height: ({ size }) => `${sizeTable[size]}px !important`,
    color: ({ color }) => color || "inherit",
  },
}))

const Loading = ({ size = "SM", color }) => {
  const classes = useStyles({ size, color })

  return (
    <div className={classes.loadingWrapper}>
      <CircularProgress classes={{ root: classes.loading }} />
    </div>
  )
}

Loading.propTypes = {
  size: PropTypes.oneOf(["XS", "SM", "LG"]),
  color: PropTypes.string,
}

export default Loading
