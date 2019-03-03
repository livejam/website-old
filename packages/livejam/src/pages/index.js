import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

import Hero from '../components/hero';

export default ({ classes, data }) => (
  <Layout>
    <SEO title="Home" keywords={[`live`, `jam`, `sessions`]} />
    <Hero />
  </Layout>
);
