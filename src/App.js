import { ThemeProvider } from "@mui/material";
import { Layout } from "./components/Layout";
import { GlobalStyle } from "./globalStyle";
import { QueryClient, QueryClientProvider } from "react-query";
import { useSelector } from "react-redux";
import { theme } from "./theme";
import { AppStyled } from "./style";

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
