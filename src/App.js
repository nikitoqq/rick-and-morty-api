import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@mui/material";
import { useSelector } from "react-redux";

import { Layout } from "./components/Layout";

import { GlobalStyle } from "./globalStyle";
import { AppStyled } from "./style";
import { theme } from "./theme";

const queryClient = new QueryClient();

export const App = () => {
  const themeState = useSelector(
    (state) => state.persistedReducer.themes.themes
  );

  return (
    <AppStyled>
      <GlobalStyle theme={themeState} />
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <Layout />
        </QueryClientProvider>
      </ThemeProvider>
    </AppStyled>
  );
};
