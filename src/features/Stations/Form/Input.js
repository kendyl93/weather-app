import React from "react"
import PropTypes from "prop-types"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles((theme) => ({
  input: {
    width: "100%",
  },
}))

const Input = ({
  inputs,
  onValueChange,
  inputData: { name, Tag, validator, helperText = "", ...rest },
}) => {
  const classes = useStyles()
  const error = validator && validator(inputs[name])

  return (
    <Grid item xs={12} md={3}>
      <Tag
        classes={{ root: classes.input }}
        required
        error={error}
        name={name}
        helperText={error && helperText}
        value={inputs[name]}
        onChange={onValueChange}
        {...rest}
      />
    </Grid>
  )
}

Input.propTypes = {
  inputs: PropTypes.shape({
    name: PropTypes.string,
    latitude: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    longitude: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    altitude: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  }).isRequired,
  onValueChange: PropTypes.func.isRequired,
  inputData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    Tag: PropTypes.oneOfType([PropTypes.node, PropTypes.elementType]).isRequired,
    validator: PropTypes.func,
    helperText: PropTypes.string,
  }),
}

export default Input
