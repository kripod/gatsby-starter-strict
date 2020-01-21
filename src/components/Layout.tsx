import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps): JSX.Element {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          languageCode
          countryCode
        }
      }
    }
  `);

  return (
    <React.StrictMode>
      <Helmet
        titleTemplate={`%s - ${data.site.siteMetadata.title}`}
        defaultTitle={data.site.siteMetadata.title}
      >
        <html lang={data.site.siteMetadata.languageCode} />
        <meta name="description" content={data.site.siteMetadata.description} />

        <meta
          property="og:locale"
          content={`${data.site.siteMetadata.languageCode}_${data.site.siteMetadata.countryCode}`}
        />
      </Helmet>

      <header>{/* TODO */}</header>

      <main>{children}</main>

      <footer>{/* TODO */}</footer>
    </React.StrictMode>
  );
}
