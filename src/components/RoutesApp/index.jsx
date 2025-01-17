import { Route, Routes } from "react-router";

import { Setting } from "../../routes/Setting";
import { Character } from "../../routes/Character";
import { Home } from "../../routes/Home";

export const RoutesApp = () => {
  return (
    //данные должны передаваться с помощью reduce. создать новое состояние.
    //Посмотреть как в реакт роут созранять данные и переносить по юрл ссылке
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
