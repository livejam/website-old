import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';

const Layout = ({ children, classes }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Typography
              variant="h6"
              color="inherit"
              noWrap
              className={classes.title}>
              {data.site.siteMetadata.title}
            </Typography>
          </Toolbar>
        </AppBar>
        <main className={classes.main}>{children}</main>
        <Divider />
        <footer className={classes.footer}>
          <Typography
            variant="subtitle1"
            align="center"
            color="textSecondary"
            component="p">
            © {new Date().getFullYear()} Mike &amp; Sebastian
          </Typography>
        </footer>
      </div>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    minHeight: '100%',
    position: 'relative',
  },
  appBar: {
    backgroundColor: 'black',
  },
  title: {
    fontWeight: 700,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  main: {
    paddingBottom: '124px',
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});

export default withStyles(styles)(Layout);
