import { useDispatch, useSelector } from "react-redux";
import { Box, Radio, RadioGroup } from "@mui/material";

import { FilterBox, FilterLabels, FilterName } from "./style";

import { addFilterStatus, addFilterType } from "../../features/filter";

export const Filter = ({ filterData, filterDisplay }) => {
  const dispatch = useDispatch();
  const themeState = useSelector(
    (state) => state.persistedReducer.themes.themes
  );

  const styled = {
    backGroundColor: themeState.main,
    display: filterDisplay ? "flex" : "none",
    colorLight: themeState.light,
  };

  const setState = (filterName, elem) => {
    if (filterName === "status") {
      dispatch(addFilterStatus(elem));
    } else if (filterName === "type") {
      dispatch(addFilterType(elem));
    }
  };

  const radioMap = (filter) =>
    filter.data.map((elem) => (
      <FilterLabels
        key={elem}
        sx={{color: styled.colorLight}}
        control={
          <Radio
          sx={{color: styled.colorLight, '&.Mui-checked': {color: styled.colorLight}}}
            key={elem}
            onClick={() => setState(filter.name, elem === "none" ? "" : elem)}
            value={elem}
          />
        }
        label={elem}
      />
    ));

  const filterMap = filterData.map((filter, index) => (
    <Box key={index}>
      <FilterName color={styled.colorLight}>{filter.name}</FilterName>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        {radioMap(filter)}
      </RadioGroup>
    </Box>
  ));

  return (
    <FilterBox
      sx={{
        bgcolor: styled.backGroundColor,
        display: styled.display,
      }}
    >
      {filterMap}
    </FilterBox>
  );
};
