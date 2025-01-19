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
} from "./style";
import { useQuery } from "react-query";
import { getCharacterById } from "../../utils/data";
import { useParams } from "react-router";
import { Episodes } from "../../components/Episodes";
import { GetFullDate } from "../../utils/utils";

export const Character = () => {
  const params = useParams();

  const { data, isLoading } = useQuery("characterId", () =>
    getCharacterById(params.id)
  );

  if (isLoading) {
    return <></>;
  }

  const characters = data.data;

 const created = GetFullDate(new Date(characters.created))



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
          Episodes: <Episodes episodes={characters.episode} />
        </CharacterOtherInformationDescription>
        <CharacterCreatedInformationDescription>
          Created: {created}
        </CharacterCreatedInformationDescription>
      </CharacterOtherInformation>
    </CharacterBox>
  );
};
