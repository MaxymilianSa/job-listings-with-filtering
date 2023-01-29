import 'styled-components';

import { theme } from './theme';

export type CustomTheme = typeof theme;

export type CustomThemeColorType = keyof CustomTheme['colors'];

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends CustomTheme {}
}
