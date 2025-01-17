import { FilterAlt } from "@mui/icons-material";
import { AppBar, styled, Box } from "@mui/material";
import { NavLink } from "react-router";

export const HeaderAppBar = styled(AppBar)`
  display: flex;
  justify-content: space-around;
  background-color: #3c3e44;
  padding: 10px;
`;

export const HeaderLink = styled(NavLink)`
  text-decoration: none;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: White;
  font-weight: 600;
  font-size: 24px;
`;

export const HeaderBox = styled(Box)`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const FilterIcon = styled(FilterAlt)`
  min-width: 20px;
  min-height: 20px;
  border-radius: 25%;
  padding: 2px;
`;
