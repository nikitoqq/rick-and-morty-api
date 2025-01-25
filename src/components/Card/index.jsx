import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";

import { setCharacterPage } from "../../features/characterPage";

import { statusColor } from "../../utils/utils";
import { getFirstEpisode } from "../../utils/data";

import {
  CharacterCard,
  CharacterName,
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

  const { data, isLoading } = useQuery({
    queryKey: ["Seen", character],
    queryFn: () => getFirstEpisode(character.episode[0]),
  });

  if (isLoading) {
    return <Box></Box>;
  }

  const styled = {
    main: themeState.main,
    light: themeState.light,
    contrast: themeState.contrastText,
  };

  const checkLocal = () =>
    characterPage.findIndex((localPage) => localPage.id === character.id) === -1
      ? dispatch(setCharacterPage(character))
      : null;

  return (
    <CharacterCard
    media=""
      to={`character/${character.id}`}
      onClick={checkLocal}
      sx={{
        backgroundColor: styled.main,
        ":hover": { backgroundColor: "rgba(177, 177, 177, 0.2)" },
      }}
      key={character.id}
    >
      <ImageWrapper>
        <Image image={character.image} title={`${character.name} image`} />
      </ImageWrapper>
      <CharacterContent>
        <CharacterName sx={{ color: styled.light }}>
          {character.name}
        </CharacterName>
        <CharacterTypography color={styled.contrast}>
          status:
        </CharacterTypography>
        <StatusBox>
          <CharacterTypographyStatus color={styled.light}>
            {character.status}
          </CharacterTypographyStatus>
          <Circle sx={() => statusColor(character.status)} />
        </StatusBox>
        <CharacterTypography color={styled.contrast}>
          species:
        </CharacterTypography>
        <CharacterTypographyStatus color={styled.light}>
          {character.species}
        </CharacterTypographyStatus>
        <CharacterTypography color={styled.contrast}>
          Last known location:
        </CharacterTypography>
        <CharacterLocation color={styled.light}>
          {character.location.name}
        </CharacterLocation>
        <CharacterTypography color={styled.contrast}>
          First seen in:
        </CharacterTypography>
        <CharacterLocation color={styled.light}>
          {data.data.name}
        </CharacterLocation>
      </CharacterContent>
    </CharacterCard>
  );
};
