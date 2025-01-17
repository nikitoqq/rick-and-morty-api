import { useState } from "react";

import { FilterBox, FilterLabels, FilterName } from "./style";
import { Box, Radio, RadioGroup } from "@mui/material";

export const Filter = ({ filterData, isCheck }) => {
  const [value, SetValue] = useState("");

  const setFilter = (event) => {
    alert(event.target.value)
  };

  const getRaioMap = (filter) => {
    return filter.data.map((elem, index) => (
      <FilterLabels key={index} control={<Radio key={index} value={elem} onClick={setFilter}/>} label={elem} />
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
