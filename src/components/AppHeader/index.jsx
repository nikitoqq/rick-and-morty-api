import { useDispatch, useSelector } from "react-redux";

import { Filter } from "../Filter";

import { setFilterDisplay } from "../../features/filterDisplay";

import { filterData, headerLink, findLocation } from "../../utils/utils";

import { FilterIcon, HeaderAppBar, HeaderBox, HeaderLink } from "./style";
import { useLocation } from "react-router";

export const AppHeader = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const [filterDisplayState, themeState] = [
    useSelector((state) => state.otherReducer.filterDisplay.filterDisplay),
    useSelector((state) => state.persistedReducer.themes.themes),
  ];

  const styled = {
    main: themeState.main,
    contrast: themeState.contrastText,
    active: filterDisplayState
      ? { border: `1px solid ${themeState.light}` }
      : null,
    light: themeState.light,
  };

  const headerMap = headerLink.map((elem, index) => (
    <HeaderLink
      sx={{
        textDecoration: findLocation(elem, location),
        color: styled.light,
        ":hover": { color: styled.contrast },
      }}
      key={index}
      to={elem === "home" ? "" : elem}
    >
      {elem}
    </HeaderLink>
  ));

  return (
    <HeaderAppBar sx={{ backgroundColor: styled.main }}>
      <HeaderBox border="0px">
        {headerMap}
        <FilterIcon
          sx={{
            border: styled.active,
            color: styled.contrast,
            ":hover": { cursor: "pointer", color: styled.light },
          }}
          onClick={() => dispatch(setFilterDisplay())}
        />
      </HeaderBox>
      <Filter filterDisplay={filterDisplayState} filterData={filterData} />
    </HeaderAppBar>
  );
};
