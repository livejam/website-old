import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people!</h1>
    <p>
      Join fellow tech makers for live jam session on Twitch, Youtube and other
      channels. Interact in real time, explore new topics and watch how others
      would troubleshoot a problem.
    </p>

    <Link to="/upcoming/">Upcoming LiveJams</Link>
  </Layout>
);

export default IndexPage;
