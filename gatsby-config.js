module.exports = {
  siteMetadata: {
    title: 'Gatsby Strict Starter',
    description:
      'Demo for a Gatsby starter with strict linting and auto-formatting rules.',
    languageCode: 'en',
    countryCode: 'US',
  },
  plugins: [
    'gatsby-plugin-chakra-ui',
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Gatsby Strict Starter',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/favicon.png',
      },
    },
    'gatsby-plugin-react-helmet-async',
    'gatsby-plugin-typescript',
  ],
};
