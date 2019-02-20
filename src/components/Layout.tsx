import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
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
      <div>
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

        <main>{children}</main>

        <footer>{/* TODO */}</footer>
      </div>
    </ThemeProvider>
  );
}
