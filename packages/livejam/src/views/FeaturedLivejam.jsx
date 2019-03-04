import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import { StaticQuery } from "gatsby";
// core components
import GridContainer from "src/components/Grid/GridContainer.jsx";
import GridItem from "src/components/Grid/GridItem.jsx";
import Card from "src/components/Card/Card.jsx";
import CardBody from "src/components/Card/CardBody.jsx";
import CardFooter from "src/components/Card/CardFooter.jsx";
import Button from "src/components/CustomButtons/Button.jsx";
import Badge from "src/components/Badge/Badge.jsx";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import { title, container } from "src/assets/jss/material-kit-react.jsx";
import language from "src/assets/img/flags/DE.png";

const Newsletter = props => {
  const { classes } = props;
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery1 {
          site {
            siteMetadata {
              title
            }
          }
          mikebild: file(relativePath: { eq: "mikebild.jpg" }) {
            childImageSharp {
              fluid(quality: 100, maxHeight: 100, maxWidth: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          sebastiankorfmann: file(
            relativePath: { eq: "sebastiankorfmann.jpg" }
          ) {
            childImageSharp {
              fluid(quality: 100, maxHeight: 100, maxWidth: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={({ site, sebastiankorfmann, mikebild }) => {
        return (
          <div className={classes.section}>
            <div className={classes.container}>
              <div className={classes.container}>
                <h2 className={classes.title}>Featured Livejam Channels</h2>
                <GridContainer justify="center">
                  <GridItem
                    xs={12}
                    sm={8}
                    md={8}
                    className={classNames(classes.mlAuto, classes.mrAuto)}
                  >
                    <div className={classes.textCenter} />
                    <Card raised className={classes.card}>
                      <CardBody className={classes.cardBody}>
                        <h3 className={title}>Building Livejam.io</h3>
                        <p>
                          Join Mike and Sebastian for a Livejam building
                          Livejam.io :)
                        </p>
                        <img
                          src={sebastiankorfmann.childImageSharp.fluid.src}
                          className={classes.imgRoundedCircle}
                          alt="foo"
                        />
                        <img
                          src={mikebild.childImageSharp.fluid.src}
                          className={classes.imgRoundedCircle}
                          alt="foo"
                        />
                        <Button color="danger">
                          <i className="fas fa-play" />
                          Join the next Session
                        </Button>
                      </CardBody>
                      <CardFooter>
                        <div>
                          <Badge color="info">AWS</Badge>
                          <Badge color="info">Cloud Development Kit</Badge>
                          <Badge color="info">GatsbyJS</Badge>
                          <span>
                            Language:{" "}
                            <img src={language} alt="german" title="german" />
                          </span>
                        </div>
                      </CardFooter>
                    </Card>
                  </GridItem>
                </GridContainer>
              </div>
            </div>
          </div>
        );
      }}
    />
  );
};

const styles = {
  card: {},
  imgRoundedCircle: {
    borderRadius: "50% !important",
    maxWidth: "100%",
    height: "auto",
    boxShadow:
      "0 5px 15px -8px rgba(0,0,0, 0.24), 0 8px 10px -5px rgba(0,0,0, 0.2)",
    marginRight: "15px"
  },
  container: {
    zIndex: "12",
    color: "#FFFFFF",
    ...container
  },
  mlAuto: {
    marginLeft: "auto"
  },
  mrAuto: {
    marginRight: "auto"
  },
  cardBody: {
    padding: "15px",
    "& form": {
      marginBottom: "0"
    }
  },
  textCenter: {
    textAlign: "center !important"
  },
  white: {
    backgroundColor: "#FFFFFF"
  },
  border: {},
  section: {
    padding: "70px 0",
    textAlign: "center",
    backgroundColor: "#FFFFFF"
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  description: {
    color: "#999"
  }
};

export default withStyles(styles)(Newsletter);
