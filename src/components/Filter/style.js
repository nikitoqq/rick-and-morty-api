import { Box, FormControlLabel, styled, Typography } from "@mui/material";

export const FilterBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 350px;
  height: 210px;
  position: fixed;
  top: 2.8rem;
  right: 10vw;
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
