import { useDispatch } from "react-redux";
import { Box, Radio, RadioGroup } from "@mui/material";

import { FilterBox, FilterLabels, FilterName } from "./style";

import {
  addFilterStatus,
  addFilterType,
} from "../../toolkitRedux/toolkitSlice";

export const Filter = ({ filterData, isCheck }) => {
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
            onClick={() => setState(filter.name, elem)}
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
        <FilterName>{filter.name}</FilterName>
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
    <FilterBox sx={{ display: isCheck ? "flex" : "none" }}>
      {filterMap}
    </FilterBox>
  );
};
