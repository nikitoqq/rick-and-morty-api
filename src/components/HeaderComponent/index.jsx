import { FilterIcon, HeaderAppBar, HeaderBox, HeaderLink } from "./style";
import { Filter } from "../Filter";
import { filterData } from "../../utils/filterData";
import { useState } from "react";

export const HeaderComponent = () => {
  const [isCheck, setIsCheck] = useState(false);

  const clickCheck = () => {
    setIsCheck(!isCheck);
  };
  const headerElement = ["Home", "Setting"];

  const headerMap = headerElement.map((elem) => {
    return <HeaderLink to={elem === "Home" ? "" : elem}>{elem}</HeaderLink>;
  });
  return (
    <HeaderAppBar>
      <HeaderBox>
        {headerMap}
        <FilterIcon onClick={clickCheck} />
      </HeaderBox>
      <Filter isCheck={isCheck} filterData={filterData} />
    </HeaderAppBar>
  );
};
