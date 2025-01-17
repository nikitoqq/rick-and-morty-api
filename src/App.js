import { Layout } from "./components/Layout";
import { RoutesApp } from "./components/RoutesApp";
import { GlobalStyle } from "./globalStyles";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();
export const App = () => {
  
  return (
    <>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <Layout children={<RoutesApp />}/>
      </QueryClientProvider>
    </>
  );
};
