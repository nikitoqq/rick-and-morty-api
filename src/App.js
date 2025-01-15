import { Home } from "./routes/Home";
import { Layout } from "./components/Layout";
import { GlobalStyle } from "./globalStyles";
import { Setting } from "./routes/Setting";
import { Character } from "./routes/Character";
import { characters } from "./utils/data";
import { Route, Routes } from "react-router";
export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Routes>
          <Route index element={<Home />} />
          <Route
            path="/Character"
            element={<Character characters={characters[0]} />}
          />
          <Route path="/Setting" element={<Setting />} />
        </Routes>
      </Layout>
    </>
  );
};
