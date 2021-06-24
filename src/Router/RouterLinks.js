import React from "react"
import PropTypes from "prop-types"
import Link from "./Link"
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles((theme) => ({
  linkWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "fixed",
    bottom: 0,
    width: "100%",
    left: 0,
    right: 0,
    zIndex: 9,

    [theme.breakpoints.up("md")]: {
      position: "inherit",
    },
  },
}))

const RouterLinks = ({ routes }) => {
  const classes = useStyles()

  return (
    <div className={classes.linkWrapper}>
      {routes.map(({ path: to, label, Icon }) => (
        <Link key={to} to={to} Icon={Icon}>
          {label}
        </Link>
      ))}
    </div>
  )
}

RouterLinks.propTypes = {
  routes: PropTypes.array,
}

export default RouterLinks
