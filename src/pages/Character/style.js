import { Box, CardMedia, styled, Typography } from "@mui/material";

export const CharacterBox = styled(Box)`
  max-width: 1440px;
  margin: 100px auto 100px auto;
`;

export const CharacterFlexBox = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const Image = styled(CardMedia)`
  width: 100%;
  height: 100%;
`;

export const ImageWrapper = styled(Box)`
  height: 400px;
  width: 400px;
  margin: 0px 20px 40px 20px;
`;

export const CharacterAboutBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px 20px 40px 20px;
`;

export const CharacterDescription = styled(Typography)`
  font-size: 30px;
  font-weight: 600;
`;

export const CharacterName = styled(CharacterDescription)`
  font-size: 64px;
  line-height: 70px;
  margin-bottom: 20px;
`;

export const CharacterOtherInformation = styled(Box)`
  display: flex;
  flex-direction: column;
`;

export const CharacterOtherInformationDescription = styled(
  CharacterDescription
)`
  margin-left: 20px;
`;

export const CharacterCreatedInformationDescription = styled(
  CharacterOtherInformationDescription
)`
  font-size: 26px;
`;
