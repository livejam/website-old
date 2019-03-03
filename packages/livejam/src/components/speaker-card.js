import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

export const SpeakerCard = ({
  classes,
  theme,
  link = '',
  image,
  headline,
  subHeadline,
}) => {
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cover}
        image={image}
        title="Live from space album cover"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Button
            variant="outlined"
            href={link}
            size="large"
            className={classes.headlineLink}>
            {headline}
          </Button>

          <Typography variant="subtitle1" color="textSecondary">
            {subHeadline}
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
};

const styles = theme => ({
  card: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 150,
    height: 150,
  },
  headlineLink: {
    width: '100%',
  },
});

export default withStyles(styles, { withTheme: true })(SpeakerCard);
