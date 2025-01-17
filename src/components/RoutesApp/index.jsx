import { Route, Routes } from "react-router";

import { Setting } from "../../routes/Setting";
import { Character } from "../../routes/Character";
import { Home } from "../../routes/Home";

import { getCharacter } from "../../utils/data";

export const RoutesApp = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route
        path="/Character"
        element={<Character />}
      />
      <Route path="/Setting" element={<Setting />} />
    </Routes>
  );
};
