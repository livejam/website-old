/*eslint-disable*/
import React from "react";
import { Link } from "gatsby";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
import { List, ListItem, withStyles } from "@material-ui/core";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import footerStyle from "src/assets/jss/material-kit-react/components/footerStyle.jsx";

function Footer({ ...props }) {
  const { classes, whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <ListItem className={classes.inlineBlock}>
                <Link to="/about" className={classes.block}>
                  About us
                </Link>
              </ListItem>
              <ListItem className={classes.inlineBlock}>
                <Link to="/imprint" className={classes.block}>
                  Imprint
                </Link>
              </ListItem>
              <ListItem className={classes.inlineBlock}>
                <Link to="/privacy" className={classes.block}>
                  Privacy
                </Link>
              </ListItem>
            </ListItem>
          </List>
        </div>
        <div className={classes.right}>
          &copy; {1900 + new Date().getYear()} Mike &amp; Sebastian
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  whiteFont: PropTypes.bool
};

export default withStyles(footerStyle)(Footer);
