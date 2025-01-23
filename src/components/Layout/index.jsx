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
          <Route path="rick-and-morty-api/" element={<Home />} />
          <Route path={"rick-and-morty-api/character/:id"} element={<Character />} />
          <Route path="rick-and-morty-api/setting" element={<Setting />} />
        </Routes>
      </Main>
    </>
  );
};
