import { useDispatch, useSelector } from "react-redux";
import { Box, Radio, RadioGroup } from "@mui/material";

import { FilterBox, FilterLabels, FilterName } from "./style";

import {
  addFilterStatus,
  addFilterType,
} from "../../features/filter";

export const Filter = ({ filterData, filterDisplay }) => {
  const themeState = useSelector((state) => state.persistedReducer.themes.themes);
  const dispatch = useDispatch();

  const setState = (filterName, elem) => {
    if (filterName === "status") {
      dispatch(addFilterStatus(elem));
    } else if (filterName === "type") {
      dispatch(addFilterType(elem));
    }
  };

  const getRaioMap = (filter) => {
    return filter.data.map((elem) => (
      <FilterLabels
        key={elem}
        control={
          <Radio
            key={elem}
            onClick={() => setState(filter.name, elem === "none" ? "" : elem)}
            value={elem}
          />
        }
        label={elem}
      />
    ));
  };

  const filterMap = filterData.map((filter, index) => {
    return (
      <Box key={index}>
        <FilterName color={themeState.light}>{filter.name}</FilterName>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          {getRaioMap(filter)}
        </RadioGroup>
      </Box>
    );
  });

  return (
    <FilterBox
      sx={{
        bgcolor: themeState.main,
        display: filterDisplay ? "flex" : "none",
      }}
    >
      {filterMap}
    </FilterBox>
  );
};
