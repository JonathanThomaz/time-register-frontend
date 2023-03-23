import 'styled-components';
interface IColors {
  primary: string;
  secondary: string;
  text: string;
  grey: string;
}
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: IColors;
    fonts: {
      primaryFamily: string;
    };
  }
}
