import "styled-components";
import { DefaultTheme } from "../styles/themes/DefaultTheme";

type DefaultThemeType = typeof DefaultTheme;

declare module "styled-components" {
  export interface DefaultTheme extends DefaultThemeType {}
}
