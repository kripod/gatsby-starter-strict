import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';

const Layout = ({ children }) => (
  <div>
    {/* TODO: Add global styles */}

    <StaticQuery
      query={graphql`
        {
          site {
            siteMetadata {
              title
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
        </Helmet>
      )}
    />

    <header>{/* TODO */}</header>

    <main>{children}</main>

    <footer>{/* TODO */}</footer>
  </div>
);

export default Layout;
