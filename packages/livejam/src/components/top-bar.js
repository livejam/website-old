import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { Twitter } from "mdi-material-ui";
import { withStyles } from "@material-ui/core/styles";

const TopBar = ({ title, classes }) => (
  <AppBar position="sticky" className={classes.appBar}>
    <Toolbar className={classes.layout}>
      <Typography variant="h6" color="inherit" noWrap className={classes.title}>
        <Link to="/">{title}</Link>
      </Typography>
      <div className={classes.grow} />
      <div>
        <IconButton color="inherit" href="https://twitter.com/livejamio">
          <Twitter />
        </IconButton>
      </div>
    </Toolbar>
  </AppBar>
);

TopBar.propTypes = {
  title: PropTypes.node.isRequired
};

const styles = theme => ({
  appBar: {
    backgroundColor: "black"
  },
  title: {
    fontWeight: 700,
    "& a": {
      textDecoration: "none",
      color: "#FFF"
    }
  },
  grow: {
    flexGrow: 1
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1400 + theme.spacing.unit * 3 * 2)]: {
      width: 1400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  }
});

export default withStyles(styles)(TopBar);
