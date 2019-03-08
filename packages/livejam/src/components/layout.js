import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
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
            <Toolbar className={classes.layout}>
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
          <div className={classes.layout}>
            <Typography variant="h2" color="inherit">
              Yeah
            </Typography>

            <Grid container spacing={24}>
              <Grid item xs={12} md={8}>
                <Card>
                  <CardHeader>foo</CardHeader>
                  <CardContent>
                    bar
                    <SpeakerCard
                      image={sebastiankorfmann.childImageSharp.fluid.src}
                      headline="Sebastian Korfmann"
                      link="https://www.skorfmann.com"
                    />
                    <SpeakerCard
                      image={mikebild.childImageSharp.fluid.src}
                      headline="Mike Bild"
                      link="https://www.mikebild.com"
                    />
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={4}>
                <Card>
                  <CardHeader>foo</CardHeader>
                  <CardContent>
                    bar
                    <SpeakerCard
                      image={sebastiankorfmann.childImageSharp.fluid.src}
                      headline="Sebastian Korfmann"
                      link="https://www.skorfmann.com"
                    />
                    <SpeakerCard
                      image={mikebild.childImageSharp.fluid.src}
                      headline="Mike Bild"
                      link="https://www.mikebild.com"
                    />
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </div>
          <footer className={classes.footer} />
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
    [theme.breakpoints.up(1400 + theme.spacing.unit * 3 * 2)]: {
      width: 1400,
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
