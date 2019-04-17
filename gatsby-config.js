module.exports = {
  siteMetadata: {
    title: 'Gatsby Strict Starter',
    description:
      'Demo for a Gatsby starter with strict linting and auto-formatting rules.',
    language: 'en',
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
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-typescript',
  ],
};
