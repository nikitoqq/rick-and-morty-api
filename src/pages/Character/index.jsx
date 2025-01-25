import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { useSelector } from "react-redux";

import { OfflinePage } from "../OfflinePage";

import { LoaderCharacter } from "../../components/LoaderCharacter";

import { getCharacterById } from "../../utils/data";
import { GetFullDate, isOffline } from "../../utils/utils";

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

export const Character = () => {
  const params = useParams().id;

  const { data, isLoading } = useQuery({
    queryKey: ["characterId", params],
    queryFn: () => getCharacterById(params),
  });

  const themeState = useSelector(
    (state) => state.persistedReducer.themes.themes
  );
  const characterPage = useSelector(
    (state) => state.persistedReducer.characterPage.characterPage
  );

  if (isLoading) {
    return <LoaderCharacter />;
  }

  const styled = {
    light: themeState.light,
  };

  const characters =
    characterPage.find((character) => character.id === +params.id) !== undefined
      ? characterPage.find((character) => character.id === +params.id)
      : data[0];

  const episodes = data[1].map((episode) => (
    <CharacterDescription
      key={episode.id}
    >{`Episode ${episode.id}: ${episode.name}`}</CharacterDescription>
  ));

  return isOffline() && characters === undefined ? (
    <OfflinePage />
  ) : (
    <CharacterBox>
      <CharacterFlexBox>
        <ImageWrapper>
          <Image image={characters.image} title={`${characters.name} image`} />
        </ImageWrapper>
        <CharacterAboutBox>
          <Box>
            <CharacterName color={styled.light}>
              {characters.name}
            </CharacterName>
            <CharacterDescription color={styled.light}>
              Status: {characters.status}
            </CharacterDescription>
            <CharacterDescription color={styled.light}>
              {"Type:" + characters.type !== "" ? characters.type : ""}
            </CharacterDescription>
            <CharacterDescription color={styled.light}>
              Gender: {characters.gender}
            </CharacterDescription>
          </Box>
        </CharacterAboutBox>
      </CharacterFlexBox>
      <CharacterOtherInformation>
        <CharacterOtherInformationDescription color={styled.light}>
          Origin name: {characters.origin.name}
        </CharacterOtherInformationDescription>
        <CharacterOtherInformationDescription color={styled.light}>
          Location: {characters.location.name}
        </CharacterOtherInformationDescription>
        <CharacterOtherInformationDescription color={styled.light}>
          Episodes <Box>{episodes}</Box>
        </CharacterOtherInformationDescription>
        <CharacterCreatedInformationDescription color={styled.light}>
          Created: {() => GetFullDate(new Date(characters.created))}
        </CharacterCreatedInformationDescription>
      </CharacterOtherInformation>
    </CharacterBox>
  );
};
