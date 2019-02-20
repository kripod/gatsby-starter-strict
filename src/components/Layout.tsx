import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import { Box, Flex } from 'rebass';
import { ThemeProvider } from 'styled-components';
import theme from '../utils/theme';

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          language
        }
      }
    }
  `);

  return (
    <ThemeProvider theme={theme}>
      <Flex flexDirection="column" css="min-height: 100vh;">
        <Helmet
          titleTemplate={`%s | ${data.site.siteMetadata.title}`}
          defaultTitle={data.site.siteMetadata.title}
        >
          <html lang={data.site.siteMetadata.language} />
          <meta
            name="description"
            content={data.site.siteMetadata.description}
          />
        </Helmet>

        <header>{/* TODO */}</header>

        <Box as="main" flex={1}>
          {children}
        </Box>

        <footer>{/* TODO */}</footer>
      </Flex>
    </ThemeProvider>
  );
}
