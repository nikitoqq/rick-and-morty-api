import { Box, FormControlLabel, styled, Typography } from "@mui/material";

export const FilterBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 350px;
  height: 200px;
  background-color: #3c3e44;
  position: fixed;
  top: 7%;
  right: 10vw;
  padding: 10px 20px;
`;

export const FilterName = styled(Typography)`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: white;
  font-size: 20px;
  font-weight: 600;
`;

export const FilterLabels = styled(FormControlLabel)`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: white;
  font-size: 16px;
  font-weight: 600;
`;
