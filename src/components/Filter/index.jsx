import { useState } from "react";

import { FilterBox, FilterLabels, FilterName } from "./style";
import { Box, Radio, RadioGroup } from "@mui/material";

export const Filter = ({ filterData, isCheck }) => {
  const [value, SetValue] = useState("");

  const handleChange = (event) => {
    SetValue(event.target.value);
  };

  const getRaioMap = (filter) => {
    return filter.data.map((elem) => (
      <FilterLabels value={elem} control={<Radio />} label={elem} />
    ));
  };
  const filterMap = filterData.map((filter) => {
    return (
      <Box>
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
