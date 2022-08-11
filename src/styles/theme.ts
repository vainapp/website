import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    brand: {
      primary: {
        blue: {
          "900": "#000B3C",
          "800": "#323B69",
          "500": "#0086CB",
          "400": "#5CB5FE",
        },
        pink: {
          "900": "#DE0C4B",
          "700": "#FF5776",
        },
      },
      secondary: {
        lilac: {
          "900": "#7A1FA0",
          "800": "#AD52D2",
        },
        purple: {
          "900": "#6600F7",
          "700": "#A248FF",
        }
      },
      gray: {
        "900": "#676767",
        "600": "#B0AFAF",
        "500": "#CFCFCF",
        "400": "#DBD6D6",
      },
      support: {
        yellow: {
          "900": "#FCCC00",
          "500": "#FFFF50",
        }
      },
      feedback: {
        success: "#89D747",
        error: "#DD4646",
      },
    },
  },
  fonts: {
    heading: "Roboto",
    body: "Roboto",
  },
});
