import React from "react";
import { StaticQuery, graphql } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

export const Hero = ({ classes }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "hero.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        events {
          id
          title
          streaming {
            platform
            link
          }
          description
          startsAt
          users {
            name
          }
        }
      }
    `}
    render={data => {
      const nextEvent = (data && data.events && data.events.shift()) || {};
      return (
        <BackgroundImage
          Tag="section"
          className={classes.backgroundImage}
          fluid={data.desktop.childImageSharp.fluid}
        >
          <div className={classes.heroUnit}>
            <div className={classes.heroContent}>
              <Typography
                component="h1"
                variant="h1"
                align="center"
                className={classes.heroHeadline}
                gutterBottom
              >
                Hi people!
              </Typography>
              <Paper className={classes.paper} elevation={1}>
                <Typography
                  variant="h5"
                  align="center"
                  className={classes.heroSubHeadline}
                  paragraph
                >
                  Join fellow tech makers for live jam session on Twitch,
                  Youtube and other channels. Interact in real time, explore new
                  topics and watch how others would troubleshoot a problem.
                </Typography>
                <div className={classes.heroActions}>
                  <Grid container spacing={24} justify="center">
                    <Grid item>
                      <Typography
                        variant="h4"
                        align="center"
                        className={classes.heroSubHeadline}
                        paragraph
                      >
                        Next Session
                      </Typography>
                      <Button
                        variant="outlined"
                        color="secondary"
                        size="large"
                        href={nextEvent.streaming.link}
                      >
                        {nextEvent.title}
                      </Button>
                    </Grid>
                  </Grid>
                </div>
              </Paper>
            </div>
          </div>
        </BackgroundImage>
      );
    }}
  />
);

const styles = theme => ({
  heroUnit: {
    paddingBottom: theme.spacing.unit * 5
  },
  heroHeadline: {
    color: "white",
    paddingTop: "5%"
  },
  heroSubHeadline: {
    color: "white"
  },
  heroContent: {
    [theme.breakpoints.up("sm")]: {
      width: 700,
      marginLeft: "auto",
      marginRight: "auto"
    },
    margin: "0 auto",
    padding: theme.spacing.unit * 3
  },
  heroActions: {
    marginTop: "5%"
  },
  paper: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    opacity: 0.8,
    backgroundColor: "#000",
    color: "white"
  }
});

export default withStyles(styles)(Hero);
