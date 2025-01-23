import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "react-query";

import { Loader } from "../Loader";

import { setCharacterPage } from "../../features/characterPage";

import { statusColor } from "../../utils/utils";
import { getFirstEpisode } from "../../utils/data";

import {
  CharacterCard,
  CharacterLinkName,
  CharacterTypography,
  CharacterTypographyStatus,
  Image,
  Circle,
  CharacterContent,
  CharacterLocation,
  StatusBox,
  ImageWrapper,
} from "./style";
import { Box } from "@mui/material";

export const Card = ({ character }) => {
  const dispatch = useDispatch();

  const [themeState, characterPage] = [
    useSelector((state) => state.persistedReducer.themes.themes),
    useSelector((state) => state.persistedReducer.characterPage.characterPage),
  ];

  const { data, isLoading } = useQuery(["Seen", character], () =>
    getFirstEpisode(character.episode[0])
  );

  if (isLoading) {
    return <Box></Box>
  }

  const styled = {
    backgroundColor: themeState.main,
    colorLight: themeState.light,
    colorContrast: themeState.contrastText,
  };

  const checkLocal = () =>
    characterPage.findIndex((localPage) => localPage.id === character.id) === -1
      ? dispatch(setCharacterPage(character))
      : null;

  return (
    <CharacterCard
      sx={{ backgroundColor: styled.backgroundColor }}
      key={character.id}
    >
      <ImageWrapper>
        <Image image={character.image} title={`${character.name} image`} />
      </ImageWrapper>
      <CharacterContent>
        <CharacterLinkName
          onClick={checkLocal}
          sx={{ color: styled.colorLight }}
          to={`rick-and-morty-api/character/${character.id}`}
        >
          {character.name}
        </CharacterLinkName>
        <StatusBox>
          <Circle sx={() => statusColor(character.status)} />
          <CharacterTypographyStatus color={styled.colorLight}>
            {character.status}-{character.species}
          </CharacterTypographyStatus>
        </StatusBox>
        <CharacterTypography color={styled.colorContrast}>
          Last known location:
        </CharacterTypography>
        <CharacterLocation color={styled.colorLight}>
          {character.location.name}
        </CharacterLocation>
        <CharacterTypography color={styled.colorContrast}>
          First seen in:
        </CharacterTypography>
        <CharacterLocation color={styled.colorLight}>
          {data.data.name}
        </CharacterLocation>
      </CharacterContent>
    </CharacterCard>
  );
};
