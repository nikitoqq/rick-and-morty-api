import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: [
      "sans-serif",
      "Oxygen",
      "Helvetica Neue",
      "Open Sans",
      "Cantarell",
      "Ubuntu",
      "Roboto",
      "'Segoe UI'",
      "BlinkMacSystemFont",
      "-apple-system",
      "system-ui",
    ],
  },
  palette: {
    primary: {
      main: "#3c3e43",
      dark: "#272b33",
      light: "#f5f5f5",
      contrastText: "#9a9a9a",
    },
    secondary: {
      main: "rgb(245, 245, 245)",
      dark: "white",
      light: "rgb(76, 76, 76)",
      contrastText: "rgb(148, 148, 148)",
    },
  },
});
