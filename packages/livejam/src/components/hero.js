import React from "react";
import { StaticQuery, graphql } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import PlayCircleOutline from "@material-ui/icons/PlayCircleOutline";
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
                <Paper className={classes.paper} elevation={1} rounded>
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
                    Join fellow tech makers for live jam sessions on Twitch,
                    Youtube and other channels. Interact in real time, explore
                    new topics and help each other building fun stuff.
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
                          variant="contained"
                          color="primary"
                          size="large"
                          href={nextEvent.streaming.link}
                        >
                          <PlayCircleOutline className={classes.arrow} />
                          {nextEvent.title}
                        </Button>
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
    paddingBottom: theme.spacing.unit * 3,
    [theme.breakpoints.up("sm")]: {
      minHeight: 700,
      paddingTop: theme.spacing(10)
    }
  },
  arrow: {
    marginRight: theme.spacing.unit * 1
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
  }
});

export default withStyles(styles)(Hero);
