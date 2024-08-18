import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    primaryColor: string;
    secondaryColor: string;
  }
}

export const lightTheme: DefaultTheme = {
	primaryColor: "#F5AC38",
	secondaryColor: "#E36E28",
};

export const darkTheme: DefaultTheme = {
	primaryColor: "#DD1F6F",
	secondaryColor: "#E36E28",
};