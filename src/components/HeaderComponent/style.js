import { FilterAlt } from "@mui/icons-material";
import { AppBar, Link, styled, Box } from "@mui/material";

export const HeaderAppBar = styled(AppBar)`
  display: flex;
  justify-content: space-around;
  background-color: #3c3e44;
  padding: 10px;
`;

export const HeaderLink = styled(Link)`
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
  width: 20px;
  height: 20px;
`;
