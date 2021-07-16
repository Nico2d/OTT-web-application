import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      fontColor: string;
      primary: string;
      secondary: string;
      background: string;
    };
  }
}
