import React from "react"
import { makeStyles } from "@material-ui/styles"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles((theme) => ({
  tableHeader: {
    display: "grid",
    gridTemplateColumns: "auto 50px 50px",
    alignItems: "center",
    textAlign: "center",

    "& p": {
      fontWeight: 700,
    },
  },
}))

const TableHeader = () => {
  const classes = useStyles()
  return (
    <div className={classes.tableHeader} data-testid="table-header">
      <div></div>
      <Typography>Low</Typography>
      <Typography>Hight</Typography>
    </div>
  )
}

export default TableHeader
