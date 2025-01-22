import { styled, Box, Button } from "@mui/material";

export const PaginationBox = styled(Box)`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 40px;
  margin-top: 20px;
  margin-bottom: 40px;
`;

export const PaginationButton = styled(Button)`
  width: 80px;
  height: 100%;
  background-color: #9e9e9e;
  border-radius: 0.5rem;
  margin: 0px 20px;
`;

export const ThisPage = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;
