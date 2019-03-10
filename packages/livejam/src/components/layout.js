import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { withStyles } from "@material-ui/core/styles";

import TopBar from "./top-bar";
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
          <TopBar title={site.siteMetadata.title} />
          <main className={classes.main}>{children}</main>

          <Divider />
          <div className={classes.layout}>
            <Typography variant="h2" color="inherit">
              Yeah
            </Typography>

            <Grid container spacing={2}>
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
