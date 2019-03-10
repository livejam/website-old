import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import { withStyles } from "@material-ui/core/styles";

import TopBar from "./top-bar";
import { Divider } from "@material-ui/core";

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
        livejam: file(relativePath: { eq: "livejam.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={({ site, livejam, sebastiankorfmann, mikebild }) => {
      return (
        <div className={classes.root}>
          <CssBaseline />
          <TopBar title={site.siteMetadata.title} />
          <main className={classes.main}>{children}</main>

          <div className={classes.layout}>
            <Grid
              container
              justify="center"
              spacing={2}
              className={classes.featuredContainer}
            >
              <Grid item xs={12} md={8}>
                <Card>
                  <CardHeader
                    title="Building Livejam.io - 5th Iteration"
                    subheader="March 14, 2019"
                    action={
                      <IconButton>
                        <MoreVertIcon />
                      </IconButton>
                    }
                  />

                  <CardMedia
                    className={classes.media}
                    image={livejam.childImageSharp.fluid.src}
                    title="Paella dish"
                  />
                  <CardContent>
                    <Grid container justify="center" alignItems="center">
                      <Grid item xs={6} md={3}>
                        <Avatar
                          alt="Mike Bild"
                          src={mikebild.childImageSharp.fluid.src}
                          className={classes.avatar}
                        />
                      </Grid>
                      <Grid item xs={6} md={3}>
                        <Avatar
                          alt="Sebastian Korfmann"
                          src={sebastiankorfmann.childImageSharp.fluid.src}
                          className={classes.avatar}
                        />
                      </Grid>

                      <Grid item xs={12} md={5}>
                        <Typography
                          variant="subtitle1"
                          className={classes.connectorText}
                        >
                          Join Mike and Sebastian's live jam session building
                          Livejam.io.
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                  <CardActions className={classes.actions}>
                    <IconButton aria-label="Add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="Share">
                      <ShareIcon />
                    </IconButton>
                  </CardActions>
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
  featured: {
    marginTop: theme.spacing(5)
  },
  actions: {
    display: "flex"
  },
  featuredContainer: {
    marginTop: theme.spacing(7)
  },

  avatar: {
    margin: 10,
    width: 150,
    height: 150
  },

  connectorText: {
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2)
  },

  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    [theme.breakpoints.up(1400 + theme.spacing(6))]: {
      width: 1400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  main: {},
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
    position: "static",
    bottom: 0,
    width: "100%"
  }
});

export default withStyles(styles)(Layout);
