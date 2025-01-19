import { Box, CardMedia, styled, Typography } from "@mui/material";

export const CharacterBox = styled(Box)`
  max-width: 1440px;
  margin: 100px auto 100px auto;
`;

export const CharacterFlexBox = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const Image = styled(CardMedia)`
  min-width: 400px;
  height: 400px;
  margin: 0px 20px;
`;

export const CharacterAboutBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const CharacterDescription = styled(Typography)`
  font-size: 30px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 600;
  color: white;
  margin-left: 20px;
`;

export const CharacterName = styled(CharacterDescription)`
  font-size: 64px;
  margin-bottom: 20px;
`;

export const CharacterOtherInformation = styled(Box)`
  display: flex;
  flex-direction: column;
`;

export const CharacterOtherInformationDescription = styled(
  CharacterDescription
)`
  margin-top: 30px;
`;

export const CharacterCreatedInformationDescription = styled(
  CharacterOtherInformationDescription
)`
  font-size: 26px;
`;
