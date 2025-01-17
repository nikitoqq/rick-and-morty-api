import { Box } from "@mui/material";
import {
  CharacterAboutBox,
  CharacterBox,
  CharacterDescription,
  CharacterFlexBox,
  CharacterName,
  CharacterOtherInformation,
  CharacterOtherInformationDescription,
  Image,
} from "./style";

export const Character = ({ characters }) => {
  
  const episodesMap = characters.episode.map((episode) => {
    return <>{`${episode}, `}</>;
  });
  return (
    <CharacterBox>
      <CharacterFlexBox>
        <Image image={characters.image} title={`${characters.name} image`} />
        <CharacterAboutBox>
          <Box>
            <CharacterName>{characters.name}</CharacterName>
            <CharacterDescription>
              Status: {characters.status}
              {}
            </CharacterDescription>
            <CharacterDescription>Type: {characters.type}</CharacterDescription>
            <CharacterDescription>
              Gender: {characters.gender}
            </CharacterDescription>
          </Box>
        </CharacterAboutBox>
      </CharacterFlexBox>
      <CharacterOtherInformation>
        <CharacterOtherInformationDescription>
          Origin name: {characters.origin.name}
        </CharacterOtherInformationDescription>
        <CharacterOtherInformationDescription>
          Location: {characters.location.name}
        </CharacterOtherInformationDescription>
        <CharacterOtherInformationDescription>
          episodes: {episodesMap}
        </CharacterOtherInformationDescription>
        <CharacterOtherInformationDescription>
          created: {characters.created}
        </CharacterOtherInformationDescription>
      </CharacterOtherInformation>
    </CharacterBox>
  );
};
