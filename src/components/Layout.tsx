import { graphql, StaticQuery } from 'gatsby';
import * as React from 'react';
import Helmet from 'react-helmet';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => (
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
