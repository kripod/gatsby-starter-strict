import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import { createGlobalStyle } from 'styled-components';

import 'normalize.css';
import styles from './Layout.module.css';

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
  <div className={styles.root}>
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

    <header />

    <main className={styles.main}>{children}</main>

    <footer />
  </div>
);

export default Layout;
