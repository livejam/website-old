import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const Upcoming = () => (
  <Layout>
    <SEO title="Mike und Sebastian" />
    <h1>Mike und Sebastian</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default Upcoming;
