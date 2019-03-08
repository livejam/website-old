import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
import { Twitter } from "mdi-material-ui";
import { withStyles } from "@material-ui/core/styles";

import SpeakerCard from "./speaker-card";

const Layout = ({ children, classes }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
        mikebild: file(relativePath: { eq: "mikebild.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxHeight: 150, maxWidth: 150) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        sebastiankorfmann: file(relativePath: { eq: "sebastiankorfmann.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxHeight: 150, maxWidth: 150) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={({ site, sebastiankorfmann, mikebild }) => {
      return (
        <div className={classes.root}>
          <CssBaseline />
          <AppBar position="sticky" className={classes.appBar}>
            <Toolbar>
              <Typography
                variant="h6"
                color="inherit"
                noWrap
                className={classes.title}
              >
                {site.siteMetadata.title}
              </Typography>
              <div className={classes.grow} />
              <div>
                <IconButton
                  color="inherit"
                  href="https://twitter.com/livejamio"
                >
                  <Twitter />
                </IconButton>
              </div>
            </Toolbar>
          </AppBar>
          <main className={classes.main}>{children}</main>
          <Divider />
          <footer className={classes.footer}>
            <Grid container spacing={40} justify="center">
              <Grid item sm={6} md={4} lg={3}>
                <SpeakerCard
                  image={sebastiankorfmann.childImageSharp.fluid.src}
                  headline="Sebastian Korfmann"
                  link="https://www.skorfmann.com"
                />
              </Grid>
              <Grid item sm={6} md={4} lg={3}>
                <SpeakerCard
                  image={mikebild.childImageSharp.fluid.src}
                  headline="Mike Bild"
                  link="https://www.mikebild.com"
                />
              </Grid>
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
  appBar: {
    backgroundColor: "black"
  },
  title: {
    fontWeight: 700
  },
  grow: {
    flexGrow: 1
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  main: {},
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
    position: "static",
    bottom: 0,
    width: "100%"
  }
});

export default withStyles(styles)(Layout);
