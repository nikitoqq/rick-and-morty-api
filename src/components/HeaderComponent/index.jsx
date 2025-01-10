import { HeaderAppBar, HeaderBox, HeaderLink } from "./style";
import { Filter } from "../Filter";
import { filterData } from "../../utils/filterData";

export const HeaderComponent = () => {
  return (
    <HeaderAppBar>
      <HeaderBox>
        <HeaderLink>Home</HeaderLink>
        <HeaderLink>Setting</HeaderLink>
      </HeaderBox>
      <HeaderBox>
        <Filter filterData={filterData.status} />
        <Filter filterData={filterData.type} />
      </HeaderBox>
    </HeaderAppBar>
  );
};
