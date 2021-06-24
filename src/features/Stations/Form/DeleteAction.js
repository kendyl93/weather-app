import React from "react"
import PropTypes from "prop-types"
import { useSelector } from "react-redux"
import { makeStyles } from "@material-ui/styles"
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined"
import { selectStationLoading } from "../../../store/weatherStations/selectors"
import Loading from "../../../components/Loading"

const useStyles = makeStyles((theme) => ({
  buttonWrapper: {
    color: "#333",
    transition: "color .15s ease-in",

    "&:hover": {
      color: "red",
      cursor: "pointer",
    },
  },
  loading: {
    width: "20px !important",
    height: "20px !important",
    color: "red",
  },
}))

const DeleteAction = ({ action }) => {
  const classes = useStyles()
  const loading = useSelector(selectStationLoading)

  return loading ? (
    <Loading color="red" />
  ) : (
    <div className={classes.buttonWrapper}>
      <DeleteForeverOutlinedIcon data-testid="delete-button" onClick={action} />
    </div>
  )
}

DeleteAction.propTypes = {
  action: PropTypes.func,
}

export default DeleteAction
