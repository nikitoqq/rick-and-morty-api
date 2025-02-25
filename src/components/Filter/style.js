import { Box, FormControlLabel, styled, Typography } from "@mui/material";

export const FilterBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 310px;
  height: 210px;
  position: fixed;
  top: 50px;
  right: 2vw;
  padding: 10px 20px;
`;

export const FilterName = styled(Typography)`
  font-size: 20px;
  font-weight: 600;
`;

export const FilterLabels = styled(FormControlLabel)`
  font-size: 16px;
  font-weight: 600;
`;
