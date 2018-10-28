import * as React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';

const NotFoundPage = () => (
  <Layout>
    <Helmet>
      <title>Page not found</title>
    </Helmet>

    <h2>Page not found</h2>
    <p>The requested page is unavailable.</p>
  </Layout>
);

export default NotFoundPage;
