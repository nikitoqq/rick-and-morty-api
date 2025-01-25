import { Box, styled, Typography } from "@mui/material";

export const SettingMainBox = styled(Box)`
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 1440px;
  margin: 0px 20px;
  padding: 20px 20px;
  margin-top: 110px;
  border: 1px solid #3c3e44;
  border-radius: 9px;
`;

export const SettingMainRowBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  padding: 20px;
  margin: 10px 20px;
  border: 1px solid #3c3e44;
  border-radius: 9px;
`;

export const SettingTypography = styled(Typography)`
  font-size: 18px;
`;

export const SettingDescpiptionTypography = styled(Typography)`
  font-size: 17px;
`;
