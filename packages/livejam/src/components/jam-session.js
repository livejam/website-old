import React from "react";
import { StaticQuery, graphql } from "gatsby";
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

const JamSession = ({ classes, event, coverImage, hosts }) => {
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
              title={event.title}
              subheader={
                moment(event.startsAt).format("ddd, HH:mm Z") +
                " - Language: " +
                event.language
              }
              action={
                <IconButton>
                  <MoreVertIcon />
                </IconButton>
              }
            />
            <CoverImage coverImage={coverImage} classes={classes} />
            <CardContent>
              <Grid container justify="center" alignItems="center">
                {hosts.map(host => (
                  <Grid key={host.name} item xs={6} md={3}>
                    <Avatar
                      alt={host.name}
                      src={host.avatarImage.childImageSharp.fluid.src}
                      className={classes.avatar}
                    />
                  </Grid>
                ))}
                <Grid item xs={12} md={5}>
                  <Typography
                    variant="subtitle1"
                    className={classes.connectorText}
                  >
                    {event.description}
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
