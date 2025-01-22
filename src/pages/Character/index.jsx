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
} from "./style";
import { useQuery } from "react-query";
import { getCharacterById } from "../../utils/data";
import { useParams } from "react-router";
import { Episodes } from "../../components/Episodes";
import { GetFullDate, isOffline } from "../../utils/utils";
import { useSelector } from "react-redux";
import { OfflinePage } from "../OfflinePage";
import { Loader } from "../../components/Loader";

export const Character = () => {
  const params = useParams();

  const { data, isLoading } = useQuery("characterId", () => getCharacterById(params.id));

  const themeState = useSelector(
    (state) => state.persistedReducer.themes.themes
  );
  const characterPage = useSelector(
    (state) => state.persistedReducer.characterPage.characterPage
  );

  if(isLoading){
    return <Loader/>
  }

  const characters =
    characterPage.find((character) => character.id === +params.id) !== undefined
      ? characterPage.find((character) => character.id === +params.id)
      : data.data;

  const created = GetFullDate(new Date(characters?.created));

  return isOffline() && characters === undefined ? (
    <OfflinePage />
  ) : (
    <CharacterBox>
      <CharacterFlexBox>
        <ImageWrapper>
          <Image
            image={characters.image}
            title={`${characters.name} image`}
          />
        </ImageWrapper>
        <CharacterAboutBox>
          <Box>
            <CharacterName color={themeState.light}>
              {characters.name}
            </CharacterName>
            <CharacterDescription color={themeState.light}>
              Status: {characters.status}
            </CharacterDescription>
            <CharacterDescription color={themeState.light}>
              Type: {characters.type}
            </CharacterDescription>
            <CharacterDescription color={themeState.light}>
              Gender: {characters.gender}
            </CharacterDescription>
          </Box>
        </CharacterAboutBox>
      </CharacterFlexBox>
      <CharacterOtherInformation>
        <CharacterOtherInformationDescription color={themeState.light}>
          Origin name: {characters.origin.name}
        </CharacterOtherInformationDescription>
        <CharacterOtherInformationDescription color={themeState.light}>
          Location: {characters.location.name}
        </CharacterOtherInformationDescription>
        <CharacterOtherInformationDescription color={themeState.light}>
          Episodes: <Episodes episodes={characters?.episode} />
        </CharacterOtherInformationDescription>
        <CharacterCreatedInformationDescription color={themeState.light}>
          Created: {created}
        </CharacterCreatedInformationDescription>
      </CharacterOtherInformation>
    </CharacterBox>
  );
};
