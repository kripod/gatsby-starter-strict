import theme from './gatsby-plugin-chakra-ui/theme';

declare module '@emotion/core' {
  export type Theme = typeof theme;
}
