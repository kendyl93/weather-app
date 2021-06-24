import React from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/styles"
import Container from "@material-ui/core/Container"

const useStyles = makeStyles((theme) => ({
  page: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  containerRoot: {
    minHeight: "500px",
    padding: "16px",
    marginBottom: "80px",

    [theme.breakpoints.up("sm")]: {
      height: "100vh",
      border: "none",
      marginBottom: 0,
    },
  },
}))

const Page = ({ children }) => {
  const classes = useStyles()

  return (
    <div className={classes.page}>
      <Container classes={{ root: classes.containerRoot }} maxWidth="md">
        {children}
      </Container>
    </div>
  )
}

Page.propTypes = {
  children: PropTypes.node,
}

export default Page
