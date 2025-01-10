import { GlobalStyles } from "@mui/material";

export const GlobalStyle = () => (
  <GlobalStyles
    styles={{
      "*": {
        margin: "0px",
        padding: 0,
        border: 0,
        boxSizing: "border-box",
      },
      body: {
        backgroundColor: "#272b33",
      },
    }}
  />
);
