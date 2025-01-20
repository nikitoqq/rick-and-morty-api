import { ThemeProvider } from "@mui/material";
import { Layout } from "./components/Layout";
// import { theme } from "./theme";
import { GlobalStyle } from "./globalStyle";
import { QueryClient, QueryClientProvider } from "react-query";
import { useSelector } from "react-redux";
import { theme } from "./theme";

const queryClient = new QueryClient();
export const App = () => {
  const themeState = useSelector((state) => state.themes.themes);
  return (
    <>
      <GlobalStyle theme={themeState} />
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <Layout />
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
};
