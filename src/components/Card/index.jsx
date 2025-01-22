import { useQuery } from "react-query";
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
import { useDispatch, useSelector } from "react-redux";
import { statusColor } from "../../utils/utils";
import { setCharacterPage } from "../../features/characterPage";

export const Card = ({ character }) => {
  const { data, isLoading } = useQuery(["Seen", character], () =>
    getFirstEpisode(character.episode[0])
  );

  const dispatch = useDispatch();

  const themeState = useSelector(
    (state) => state.persistedReducer.themes.themes
  );

  const characterPage = useSelector(
    (state) => state.persistedReducer.characterPage.characterPage
  );

  if (isLoading) {
    return <></>;
  }

  const checkLocal = () => {
    console.log(
      characterPage.findIndex((localPage) => localPage.id === character.id)
    );
    console.log(character);
    if (
      characterPage.findIndex((localPage) => localPage.id === character.id) ===
      -1
    ) {
      dispatch(setCharacterPage(character));
    }
  };

  return (
    <CharacterCard sx={{ backgroundColor: themeState.main }} key={character.id}>
      <ImageWrapper>
        <Image image={character.image} title={`${character.name} image`} />
      </ImageWrapper>
      <CharacterContent>
        <CharacterLinkName
          onClick={checkLocal}
          sx={{ color: themeState.light }}
          to={`/Character/${character.id}`}
        >
          {character.name}
        </CharacterLinkName>
        <StatusBox>
          <Circle sx={() => statusColor(character.status)} />
          <CharacterTypographyStatus color={themeState.light}>
            {character.status}-{character.species}
          </CharacterTypographyStatus>
        </StatusBox>
        <CharacterTypography color={themeState.contrastText}>
          Last known location:
        </CharacterTypography>
        <CharacterLocation color={themeState.light}>
          {character.location.name}
        </CharacterLocation>
        <CharacterTypography color={themeState.contrastText}>
          First seen in:
        </CharacterTypography>
        <CharacterLocation color={themeState.light}>
          {data.data.name}
        </CharacterLocation>
      </CharacterContent>
    </CharacterCard>
  );
};
