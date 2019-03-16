import React from "react";
import PropTypes from "prop-types";
import { Link, StaticQuery, graphql } from "gatsby";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";
import TopBar from "./top-bar";
import "typeface-roboto";

const Layout = ({ children, classes }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={({ site }) => {
      return (
        <div className={classes.root}>
          <CssBaseline />
          <TopBar title={site.siteMetadata.title} />
          <main className={classes.main}>{children}</main>

          <footer className={classes.footer}>
            <Grid container justify="center" spacing={2}>
              <Link to="/imprint">Imprint</Link>
              <Link to="/privacy">Privacy</Link>
              <Link to="/about">About</Link>
            </Grid>
          </footer>
        </div>
      );
    }}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

const styles = theme => ({
  root: {
    minHeight: "100%",
    position: "relative"
  },
  main: {
    marginTop: theme.spacing(2)
  },
  footer: {
    color: "#FFF",
    backgroundColor: theme.palette.primary.dark,
    padding: theme.spacing(6),
    position: "static",
    bottom: 0,
    width: "100%",
    "& a": {
      textDecoration: "none",
      color: "#FFF",
      marginRight: theme.spacing(2)
    }
  }
});

export default withStyles(styles)(Layout);
