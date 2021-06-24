import React, { Fragment } from "react"
import PropTypes from "prop-types"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/styles"
import Input from "./Input"

const useStyles = makeStyles((theme) => ({
  inputsWrapper: {
    marginBottom: "8px",
  },
}))

const FormBody = ({ inputsData, onValueChange, inputs }) => {
  const classes = useStyles()

  return (
    <Grid
      container
      item
      xs={12}
      spacing={2}
      classes={{ root: classes.inputsWrapper }}
    >
      {inputsData?.map((inputData, index) => (
        <Fragment key={`stations-custom-input-${index}`}>
          <Input
            index={index}
            inputs={inputs}
            onValueChange={onValueChange}
            inputData={inputData}
          />
        </Fragment>
      ))}
    </Grid>
  )
}

FormBody.propTypes = {
  inputs: PropTypes.shape({
    name: PropTypes.string,
    latitude: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    longitude: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    altitude: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  }).isRequired,
  onValueChange: PropTypes.func,
  inputsData: PropTypes.array,
}

export default FormBody
