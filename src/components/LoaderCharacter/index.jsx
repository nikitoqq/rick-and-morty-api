import { Box } from "@mui/material";
import {
  CharacterAboutBox,
  CharacterBox,
  CharacterDescription,
  CharacterFlexBox,
  CharacterName,
  CharacterOtherInformation,
  CharacterOtherInformationDescription,
  CharacterCreatedInformationDescription,
  Image,
  ImageWrapper,
} from "./styled";

export const LoaderCharacter = () => {
  return (
    <CharacterBox>
      <CharacterFlexBox>
        <ImageWrapper>
          <Image />
        </ImageWrapper>
        <CharacterAboutBox>
          <Box>
            <CharacterName></CharacterName>
            <CharacterDescription></CharacterDescription>
            <CharacterDescription></CharacterDescription>
            <CharacterDescription></CharacterDescription>
          </Box>
        </CharacterAboutBox>
      </CharacterFlexBox>
      <CharacterOtherInformation>
        <CharacterOtherInformationDescription></CharacterOtherInformationDescription>
        <CharacterOtherInformationDescription></CharacterOtherInformationDescription>
        <CharacterOtherInformationDescription></CharacterOtherInformationDescription>
        <CharacterCreatedInformationDescription></CharacterCreatedInformationDescription>
      </CharacterOtherInformation>
    </CharacterBox>
  );
};
