import { useState } from "react";

import { InputLabel, MenuItem } from "@mui/material";
import { FilterFormControl, FilterSelect } from "./style";

export const Filter = ({ filterData }) => {
  const [value, SetValue] = useState("");

  const handleChange = (event) => {
    SetValue(event.target.value);
  };

  const MenuItemMap = filterData.filter.map((item, index) => (
    <MenuItem>{item}</MenuItem>
  ));

  return (
    <FilterFormControl size="small">
      <InputLabel id="demo-select-small-label">{filterData.name}</InputLabel>
      <FilterSelect
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={value}
        label={filterData.name}
        color="white"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {MenuItemMap}
      </FilterSelect>
    </FilterFormControl>
  );
};
