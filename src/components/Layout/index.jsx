import { HeaderComponent } from "../HeaderComponent";
import { Main } from "./style";

export const Layout = ({ children }) => {
  return (
    <>
      <HeaderComponent />
      <Main>{children}</Main>
    </>
  );
};
