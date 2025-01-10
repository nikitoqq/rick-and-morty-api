import { FilterIcon, HeaderAppBar, HeaderBox, HeaderLink } from "./style";
import { Filter } from "../Filter";
import { filterData } from "../../utils/filterData";
import { useState } from "react";

export const HeaderComponent = () => {
  const [isCheck, setIsCheck] = useState(false);

  const clickCheck = () => {
    setIsCheck(!isCheck)
  }
  const headerElement = [
    "Home",
    "Setting",
    <FilterIcon onClick={clickCheck} />,
  ];

  const headerMap = headerElement.map((elem) => {
    return <HeaderLink>{elem}</HeaderLink>;
  });
  return (
    <HeaderAppBar>
      <HeaderBox>{headerMap}</HeaderBox>
      <Filter isCheck={isCheck} filterData={filterData} />
    </HeaderAppBar>
  );
};
