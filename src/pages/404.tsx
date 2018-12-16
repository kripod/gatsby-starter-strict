import React from 'react';
import { Helmet } from 'react-helmet';
import { Heading, Text } from 'rebass';
import Container from '../components/Container';
import Layout from '../components/Layout';

const NotFoundPage = () => (
  <Layout>
    <Helmet>
      <title>Page not found</title>
    </Helmet>

    <Container>
      <Heading mb={2}>Page not found</Heading>
      <Text>The requested page is unavailable.</Text>
    </Container>
  </Layout>
);

export default NotFoundPage;
