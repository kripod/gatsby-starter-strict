module.exports = {
  siteMetadata: {
    title: 'Gatsby Strict Starter',
    description:
      'Demo for a Gatsby starter with strict linting and auto-formatting rules.',
    languageCode: 'en',
    countryCode: 'US',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        /* eslint-disable @typescript-eslint/camelcase */
        name: 'Gatsby Strict Starter',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/favicon.png',
        /* eslint-enable */
      },
    },
    '@rhysforyou/gatsby-plugin-react-helmet-async',
    'gatsby-plugin-typescript',
    'gatsby-plugin-emotion',
  ],
};
