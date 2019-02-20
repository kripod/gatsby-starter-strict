import React from 'react';
import { Text } from 'rebass';
import Container from '../components/Container';
import Layout from '../components/Layout';

export default function IndexPage() {
  return (
    <Layout>
      <Container>
        <Text as="p">Hello, world!</Text>
      </Container>
    </Layout>
  );
}
