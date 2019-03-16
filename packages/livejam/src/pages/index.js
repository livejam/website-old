import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../components/hero";
import FeaturedSection from "../components/featured-section";

const Index = ({ classes, data }) => (
  <Layout>
    <SEO title="Home" keywords={[`live`, `jam`, `sessions`]} />
    <Hero />
    <FeaturedSection />
  </Layout>
);

export default Index;
