import { Route, Routes } from "react-router";

import { AppHeader } from "../AppHeader";
import { Setting } from "../../pages/Setting";
import { Character } from "../../pages/Character";
import { Home } from "../../pages/Home";

import { Main } from "./style";

export const Layout = () => {
  return (
    <>
      <AppHeader />
      <Main>
        <Routes>
          <Route index element={<Home />} />
          <Route path={"/Character/:id"} element={<Character />} />
          <Route path="/Setting" element={<Setting />} />
        </Routes>
      </Main>
    </>
  );
};
