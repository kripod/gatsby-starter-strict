import React from 'react';
import { Helmet } from 'react-helmet';
import Container from '../components/Container';
import Layout from '../components/Layout';

const NotFoundPage = () => (
  <Layout>
    <Helmet>
      <title>Page not found</title>
    </Helmet>

    <Container>
      <h2>Page not found</h2>
      <p>The requested page is unavailable.</p>
    </Container>
  </Layout>
);

export default NotFoundPage;
