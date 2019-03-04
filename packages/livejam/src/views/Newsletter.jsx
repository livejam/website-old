import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "src/components/Grid/GridContainer.jsx";
import GridItem from "src/components/Grid/GridItem.jsx";
import Button from "src/components/CustomButtons/Button.jsx";
import Card from "src/components/Card/Card.jsx";
import CardBody from "src/components/Card/CardBody.jsx";
import CustomInput from "src/components/CustomInput/CustomInput.jsx";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui icons
import Mail from "@material-ui/icons/Mail";

import { title, container } from "src/assets/jss/material-kit-react.jsx";

const Newsletter = props => {
  const { classes } = props;
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div
          className={classNames(
            classes.subscribeLine,
            classes.subscribeLineWhite
          )}
        >
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem
                xs={12}
                sm={8}
                md={8}
                className={classNames(classes.mlAuto, classes.mrAuto)}
              >
                <div className={classes.textCenter}>
                  <h3 className={classes.title}>Subscribe to our Newsletter</h3>
                  <p className={classes.description}>
                    Join our newsletter and get news in your inbox every week!
                    We hate spam too, so no worries about this.
                  </p>
                </div>
                <Card plain className={classes.card}>
                  <CardBody className={classes.cardBody}>
                    <form>
                      <GridContainer>
                        <GridItem xs={12} sm={6} md={6} lg={8}>
                          <CustomInput
                            id="newsletter"
                            formControlProps={{
                              fullWidth: true,
                              className: classes.formFix
                            }}
                            inputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <Mail />
                                </InputAdornment>
                              ),
                              placeholder: "Your Email..."
                            }}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={6} md={6} lg={4}>
                          <Button
                            color="rose"
                            round
                            block
                            className={classes.subscribeButton}
                          >
                            subscribe
                          </Button>
                        </GridItem>
                      </GridContainer>
                    </form>
                  </CardBody>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  card: {},
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
  cardForm: {
    margin: "0 0 0 14px",
    padding: 0,
    top: 10
  },
  formFix: {},
  textCenter: {
    textAlign: "center !important"
  },
  white: {
    backgroundColor: "#FFFFFF"
  },
  subscribeLine: {
    padding: "1.875rem 0px",
    "& $card": {
      marginTop: "30px"
    },
    "& form": { margin: "0px" },
    "& $formFix": { paddingTop: "0px" }
  },
  formFix: {},
  subscribeLineWhite: {
    backgroundColor: "#FFFFFF",
    "& $subscribeButton": {
      top: "-6px"
    }
  },
  subscribeButton: {},
  border: {},
  section: {
    padding: "70px 0",
    textAlign: "center",
    backgroundColor: "#EEEEEE"
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
