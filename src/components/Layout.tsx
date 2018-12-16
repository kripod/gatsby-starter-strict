import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import { Box, Flex } from 'rebass';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from '../utils/theme';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;

    /* Prevent adjustments of font size after orientation changes in iOS */
    text-size-adjust: 100%;
  }
`;

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => (
  <ThemeProvider theme={theme}>
    <Flex flexDirection="column" css="min-height: 100vh;">
      <GlobalStyle />

      <StaticQuery
        query={graphql`
          {
            site {
              siteMetadata {
                title
                description
                language
              }
            }
          }
        `}
        render={data => (
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
        )}
      />

      <header>{/* TODO */}</header>

      <Box as="main" flex={1}>
        {children}
      </Box>

      <footer>{/* TODO */}</footer>
    </Flex>
  </ThemeProvider>
);

export default Layout;
