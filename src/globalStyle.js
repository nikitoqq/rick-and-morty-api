import { GlobalStyles } from "@mui/material";

export const GlobalStyle = ({ theme }) => {
  return (
    <GlobalStyles
      styles={{
        "*": {
          margin: "0px",
          padding: 0,
          border: 0,
          boxSizing: "border-box",
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

        body: {
          backgroundColor: theme.dark,
        },
      }}
    />
  );
};
