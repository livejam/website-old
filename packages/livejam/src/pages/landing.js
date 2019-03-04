import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Layout from "src/components/Layout";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Header from "src/components/Header/Header.jsx";
import Footer from "src/components/Footer/Footer.jsx";
import GridContainer from "src/components/Grid/GridContainer.jsx";
import GridItem from "src/components/Grid/GridItem.jsx";
import Button from "src/components/CustomButtons/Button.jsx";
import HeaderLinks from "src/components/Header/HeaderLinks.jsx";
import Parallax from "src/components/Parallax/Parallax.jsx";

import landingPageStyle from "src/assets/jss/material-kit-react/views/landingPage.jsx";

// Sections for this page
import Newsletter from "src/views/Newsletter.jsx";
import FeaturedLivejam from "src/views/FeaturedLivejam.jsx";

class LandingPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  render() {
    const { classes, ...rest } = this.props;
    return (
      <StaticQuery
        query={graphql`
          query {
            desktop: file(relativePath: { eq: "hero.jpg" }) {
              childImageSharp {
                fluid(quality: 100, maxWidth: 4200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
        render={data => {
          return (
            <Layout>
              {/* <SEO title="Home" keywords={[`live`, `jam`, `sessions`]} /> */}
              <Header
                color="transparent"
                brand="Livejam"
                links={<HeaderLinks dropdownHoverColor="info" />}
                fixed
                changeColorOnScroll={{
                  height: 300,
                  color: "info"
                }}
                {...rest}
              />
              <Parallax
                image={data.desktop.childImageSharp.fluid.src}
                filter="dark"
              >
                <div className={classes.container}>
                  <GridContainer>
                    <GridItem xs={12} sm={6} md={6}>
                      <h1 className={classes.title}>Livejam.io</h1>
                      <h4>
                        Join fellow tech makers for live jam sessions on Twitch,
                        Youtube and other channels. Interact in real time,
                        explore new topics and watch how others troubleshoot
                        problems live on-air.
                      </h4>
                      <br />
                      <Button color="danger" size="lg">
                        <i className="fas fa-play" />
                        Join the next Session
                      </Button>
                    </GridItem>
                  </GridContainer>
                </div>
              </Parallax>
              <div className={classNames(classes.main, classes.mainRaised)}>
                <FeaturedLivejam />
                <Newsletter />
              </div>
              <Footer />
            </Layout>
          );
        }}
      />
    );
  }
}

export default withStyles(landingPageStyle)(LandingPage);
