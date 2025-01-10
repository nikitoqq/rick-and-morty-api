import { HeaderComponent } from "../HeaderComponent";
import { Main } from "./style";

export const WrapperPage = ({ children }) => {
  return (
    <>
      <HeaderComponent />
      <Main>{children}</Main>
    </>
  );
};
