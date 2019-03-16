import React from "react";
import { StaticQuery, graphql } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import PlayCircleOutline from "@material-ui/icons/PlayCircleOutline";
import Countdown from "react-countdown-now";
import moment from "moment";

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
      const [nextEvent = {}] = data.events;
      return (
        <BackgroundImage
          Tag="section"
          className={classes.backgroundImage}
          fluid={data.desktop.childImageSharp.fluid}
        >
          <div className={classes.overlay}>
            <div className={classes.heroUnit}>
              <div className={classes.heroContent}>
                <Paper className={classes.paper} elevation={1}>
                  <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    className={classes.heroHeadline}
                    gutterBottom
                  >
                    Livejam.io
                  </Typography>

                  <Typography
                    variant="h5"
                    align="center"
                    className={classes.heroSubHeadline}
                    paragraph
                  >
                    Join fellow tech makers for #livejam sessions on Twitch,
                    Youtube and other channels. Interact in real time, explore
                    new topics and help each other building fun stuff.
                  </Typography>
                  <div className={classes.heroActions}>
                    <Grid container justify="center">
                      <Grid item>
                        <Typography
                          variant="h4"
                          align="center"
                          className={classes.heroSubHeadline}
                          paragraph
                        >
                          Next Live Session
                        </Typography>
                        <Button
                          variant="contained"
                          color="primary"
                          size="large"
                          href={nextEvent.streaming.link}
                        >
                          <PlayCircleOutline className={classes.arrow} />
                          {nextEvent.title}
                        </Button>
                        <div className={classes.countdown}>
                          in
                          <Countdown
                            date={moment(nextEvent.startsAt).valueOf()}
                            daysInHours={true}
                          >
                            <span>Now live on Air!</span>
                          </Countdown>
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                </Paper>
              </div>
            </div>
          </div>
        </BackgroundImage>
      );
    }}
  />
);

const styles = theme => ({
  heroUnit: {
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      minHeight: 700,
      paddingTop: theme.spacing(10)
    }
  },
  arrow: {
    marginRight: theme.spacing(1)
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
    padding: theme.spacing(3)
  },
  heroActions: {
    marginTop: "5%"
  },
  backgroundImage: {
    marginTop: theme.spacing(2) * -1
  },
  paper: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(8),
    background: "rgba(0, 0, 0, 0.5)",
    color: "white"
  },
  overlay: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.25);"
  },
  countdown: {
    margin: theme.spacing(1),
    textAlign: "center",
    fontSize: "1.25rem",
    "& span": {
      marginLeft: theme.spacing(1)
    }
  }
});

export default withStyles(styles)(Hero);
