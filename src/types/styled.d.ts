import 'styled-components';
import { ThemeType } from '@/styles/styled/themes';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
