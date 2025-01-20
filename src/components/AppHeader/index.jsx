import { useDispatch, useSelector } from "react-redux";

import { Filter } from "../Filter";

import { setFilterDisplay } from "../../features/filterDisplay/filterDisplay";

import { FilterIcon, HeaderAppBar, HeaderBox, HeaderLink } from "./style";
import { filterData } from "../../utils/utils";
import { headerLink } from "../../utils/utils";

export const AppHeader = () => {
  const filterDisplay = useSelector(
    (state) => state.filterDisplay.filterDisplay
  );
  const themeState = useSelector((state) => state.themes.themes);
  const dispatch = useDispatch();

  console.log(themeState.light);

  const headerMap = headerLink.map((elem, index) => {
    return (
      <HeaderLink
        sx={{ color: themeState.light }}
        key={index}
        to={elem === "Home" ? "" : elem}
      >
        {elem}
      </HeaderLink>
    );
  });

  return (
    <HeaderAppBar sx={{ backgroundColor: themeState.main }}>
      <HeaderBox border="0px">
        {headerMap}
        <FilterIcon
          sx={
            ({ color: themeState.contrastText },
            filterDisplay ? { border: `1px solid ${themeState.light}` } : null)
          }
          onClick={() => dispatch(setFilterDisplay())}
        />
      </HeaderBox>
      <Filter filterDisplay={filterDisplay} filterData={filterData} />
    </HeaderAppBar>
  );
};
