import React from "react"
import { useSelector } from "react-redux"
import { makeStyles } from "@material-ui/styles"
import CircularProgress from "@material-ui/core/CircularProgress"
import Button from "@material-ui/core/Button"
import { selectStationLoading } from "../../../store/weatherStations/selectors"

const useStyles = makeStyles((theme) => ({
  loading: {
    width: "20px !important",
    height: "20px !important",
    color: "#fff",
  },
  submitButtonWrapper: {
    display: "flex",
    justifyContent: "flex-end",
  },
}))

const SaveAction = () => {
  const classes = useStyles()
  const loading = useSelector(selectStationLoading)

  return (
    <div className={classes.submitButtonWrapper}>
      <Button variant="contained" color="primary" type="submit">
        {loading ? <CircularProgress classes={{ root: classes.loading }} /> : "Save"}
      </Button>
    </div>
  )
}

export default SaveAction
