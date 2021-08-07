import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import { NavLink } from "react-router-dom";
import { useMediaQuery, useTheme } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  link: {
    background: "#CCC",
    flexGrow: 1,
    height: "56px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textDecoration: "none",

    "& svg": {
      color: "#333",
    },
    "& p": {
      color: "#333",
    },

    [theme.breakpoints.up("md")]: {
      width: "140px",
      flexGrow: "inherit",
    },
  },
  active: {
    background: "#4098EF",

    "& svg": {
      color: "#fff",
    },
    "& p": {
      color: "#fff",
    },
  },
  contentWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "12px",

    [theme.breakpoints.up("md")]: {
      fontSize: "16px",
    },
  },
  label: {
    fontSize: "12px",
    color: "#333",
    [theme.breakpoints.up("md")]: {
      fontSize: "16px",
    },
  },
}));

const Link = ({ to, children, Icon }) => {
  const classes = useStyles();
  const theme = useTheme();
  const mobileDevice = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <NavLink to={to} className={classes.link} activeClassName={classes.active}>
      <div className={classes.contentWrapper}>
        {mobileDevice && <Icon />}
        <Typography classes={{ root: classes.label }}>{children}</Typography>
      </div>
    </NavLink>
  );
};

Link.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  Icon: PropTypes.any,
};

export default Link;
