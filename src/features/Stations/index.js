import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { selectWeatherStations } from "../../store/weatherStations/selectors"

import Grid from "@material-ui/core/Grid"
import {
  addStationWithLoading,
  fetchStationsWithLoading,
} from "../../store/weatherStations/actionCreators"
import StationsList from "./List/StationsList"
import { makeStyles } from "@material-ui/styles"
import FormBody from "./Form/FormBody"
import inputsData from "./Form/inputsData"
import SaveAction from "./Form/SaveAction"

const useStyles = makeStyles((theme) => ({
  currentWeatherContainer: {
    minHeight: "600px",
    background: "white",
    borderRadius: "32px",
    padding: "16px",
    marginTop: "8px",
    display: "flex",
    flexDirection: "column",

    [theme.breakpoints.up("md")]: {
      padding: "32px",
      marginTop: "32px",
    },
  },
  form: {
    width: "100%",
    marginBottom: "32px",
  },
}))

const defaultFormValues = {
  name: "",
  latitude: "",
  longitude: "",
  altitude: "",
}

const Stations = () => {
  const classes = useStyles()
  const stations = useSelector(selectWeatherStations)
  const dispatch = useDispatch()
  const [inputs, setInputs] = useState(defaultFormValues)

  const onValueChange = ({ target: { value, name } = {} }) => {
    setInputs({ ...inputs, [name]: value })
  }

  useEffect(() => {
    fetchStationsWithLoading(dispatch)
  }, [dispatch])

  const handleSubmit = (event) => {
    event.preventDefault()

    addStationWithLoading(inputs)(dispatch)
    setInputs(defaultFormValues)
  }

  return (
    <Grid container classes={{ root: classes.currentWeatherContainer }}>
      <form onSubmit={handleSubmit} className={classes.form}>
        <FormBody
          inputsData={inputsData}
          onValueChange={onValueChange}
          inputs={inputs}
        />
        <SaveAction />
      </form>
      <StationsList stations={stations} />
    </Grid>
  )
}

export default Stations
