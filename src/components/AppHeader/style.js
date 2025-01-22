import { FilterAlt } from "@mui/icons-material";
import { AppBar, styled, Box } from "@mui/material";
import { NavLink } from "react-router";

export const HeaderAppBar = styled(AppBar)`
  display: flex;
  padding: 10px;
`;

export const HeaderLink = styled(NavLink)`
  text-decoration: none;
  font-weight: 600;
  font-size: 24px;
`;

export const HeaderBox = styled(Box)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  max-width: 1440px;
  margin: 0px auto;
`;

export const FilterIcon = styled(FilterAlt)`
  min-width: 20px;
  min-height: 20px;
  border-radius: 25%;
  padding: 2px;
`;