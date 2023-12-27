import 'styled-components';
import theme from '../theme';

declare module 'styled-components' {
  type ThemeType = typeof theme

  export interface Defaultheme extends ThemeType { }
}