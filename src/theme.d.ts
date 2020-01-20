import { DefaultTheme } from '@chakra-ui/core';

declare module '@emotion/core' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends DefaultTheme {}
}
