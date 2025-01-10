import { Home } from "./pages/Home";
import { WrapperPage } from "./components/WrapperPage";
import { GlobalStyle } from "./globalStyles";
import { Setting } from "./pages/Setting";
import { Character } from "./pages/Character";
import { characters } from "./utils/data";
export const App = () => {
  return (
    <>
      <GlobalStyle />
      <WrapperPage>
        <Character characters={characters[0]} />
      </WrapperPage>
    </>
  );
};
