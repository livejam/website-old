import React from "react";
import { graphql } from "gatsby";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
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
import moment from "moment";
import grey from "@material-ui/core/colors/grey";

const CoverImage = ({ coverImage, classes }) => (
  <CardMedia
    className={classes.media}
    image={coverImage.childImageSharp.fluid.src}
    title="Livejam.io"
  />
);

const JamSession = ({ classes, data }) => {
  const jamSession = data.airtable;
  return (
    <div className={classes.featuredSection}>
      <Grid
        container
        justify="center"
        spacing={2}
        className={classes.featuredContainer}
      >
        <Grid item xs={10} md={8} lg={6}>
          <Card>
            <CardHeader
              title={jamSession.data.Name}
              subheader={
                moment(jamSession.data.StartsAt).format("ddd, HH:mm Z") +
                " - Language: " +
                jamSession.data.Language
              }
              action={
                <IconButton>
                  <MoreVertIcon />
                </IconButton>
              }
            />
            <CoverImage
              coverImage={jamSession.data.CoverImage.localFiles[0]}
              classes={classes}
            />
            <CardContent>
              <Grid container justify="center" alignItems="center">
                {jamSession.data.Hosts.map(host => (
                  <Grid key={host.id} item xs={6} md={3}>
                    <Avatar
                      alt={host.data.Name}
                      src={
                        host.data.Avatar.localFiles[0].childImageSharp.fluid.src
                      }
                      className={classes.avatar}
                    />
                  </Grid>
                ))}
                <Grid item xs={12} md={5}>
                  <Typography
                    variant="subtitle1"
                    className={classes.connectorText}
                  >
                    {jamSession.data.Description}
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
  );
};

const styles = theme => ({
  featured: {
    marginTop: theme.spacing(5)
  },
  actions: {
    display: "flex"
  },
  featuredContainer: {},

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
  featuredSection: {
    width: "auto",
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: grey[300],
    paddingTop: theme.spacing(7),
    paddingBottom: theme.spacing(7)
  }
});

export default withStyles(styles)(JamSession);

export const pageQuery = graphql`
  query JamSessionById($id: Int!) {
    airtable(table: { eq: "JamSessions" }, data: { ID: { eq: $id } }) {
      id
      data {
        ID
        Name
        Description
        StreamingLink
        Tags
        StartsAt
        Language
        Platform
        Length
        Hosts {
          id
          data {
            Name
            username
            Avatar {
              localFiles {
                childImageSharp {
                  fluid(maxWidth: 256) {
                    ...GatsbyImageSharpFluid_tracedSVG
                  }
                }
              }
            }
          }
        }
        CoverImage {
          localFiles {
            childImageSharp {
              fluid(maxWidth: 512) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  }
`;
