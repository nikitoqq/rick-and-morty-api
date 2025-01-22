import { useDispatch, useSelector } from "react-redux";

import { Filter } from "../Filter";

import { setFilterDisplay } from "../../features/filterDisplay";
import { pageReset } from "../../features/page";

import { filterData, headerLink } from "../../utils/utils";

import { FilterIcon, HeaderAppBar, HeaderBox, HeaderLink } from "./style";

export const AppHeader = () => {
  const dispatch = useDispatch();

  const [filterDisplayState, themeState] = [
    useSelector((state) => state.otherReducer.filterDisplay.filterDisplay),
    useSelector((state) => state.persistedReducer.themes.themes),
  ];

  const styled = {
    backgroundColor: themeState.main,
    color: themeState.contrastText,
    border: `1px solid ${themeState.light}`,
  };

  const headerMap = headerLink.map((elem, index) => (
    <HeaderLink
      sx={{ color: themeState.light }}
      key={index}
      to={elem === "home" ? "" : elem}
      onClick={elem === "home" ? () => dispatch(pageReset()) : null}
    >
      {elem}
    </HeaderLink>
  ));

  return (
    <HeaderAppBar sx={{ backgroundColor: styled.backgroundColor }}>
      <HeaderBox border="0px">
        {headerMap}
        <FilterIcon
          sx={
            ({ color: styled.color },
            filterDisplayState ? { border: styled.border } : null)
          }
          onClick={() => dispatch(setFilterDisplay())}
        />
      </HeaderBox>
      <Filter filterDisplay={filterDisplayState} filterData={filterData} />
    </HeaderAppBar>
  );
};
