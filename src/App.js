import { Home } from "./pages/Home";
import { WrapperPage } from "./components/WrapperPage";
import { GlobalStyle } from "./globalStyles";
import { Setting } from "./pages/Setting";
export const App = () => {
  return (
    <>
      <GlobalStyle />
      <WrapperPage>
        <Setting/>
      </WrapperPage>
    </>
  );
};
