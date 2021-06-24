import React, { Fragment } from "react"
import { makeStyles } from "@material-ui/styles"
import { Typography } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  row: {
    display: "grid",
    textAlign: "center",
    alignItems: "center",
    gridTemplateColumns: "1fr 70px 70px 70px 30px",
    height: "54px",
    padding: "0 8px",

    "&:nth-child(odd)": {
      background: "#CCC",
    },

    "&:first-child": {
      "& p": {
        fontWeight: 700,
      },

      "& p:first-child": {
        textAlign: "left",
      },
    },
  },
}))

const headers = ["Name", "Lat", "Lng", "Alt", ""]

const Header = () => {
  const classes = useStyles()

  return (
    <div className={classes.row}>
      {headers.map((headerName, index) => (
        <Fragment key={`station-${headerName}-${index}`}>
          <Typography>{headerName}</Typography>
        </Fragment>
      ))}
    </div>
  )
}

export default Header
