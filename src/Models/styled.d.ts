import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;

    font: {
      small: string;
      normal: string;
      big: string;
    };

    colors: {
      fontColor: string;
      primary: string;
      secondary: string;
      background: string;
      white: string;
      black: string;
      warningRed: string;
    };
  }
}
