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
} from "./style";
import { useSelector } from "react-redux";
import { statusColor } from "../../utils/utils";

export const Card = ({ character }) => {
  const { data, isLoading } = useQuery(["Seen", character], () =>
    getFirstEpisode(character.episode[0])
  );

  const theme = useSelector((state) => state.themes.themes);
  
  if (isLoading) {
    return <></>;
  }

  return (
    <CharacterCard sx={{ backgroundColor: theme.main }} key={character.id}>
      <Image image={character.image} title={`${character.name} image`} />
      <CharacterContent>
        <CharacterLinkName
          sx={{ color: theme.light }}
          to={"/Character/" + character.id}
        >
          {character.name}
        </CharacterLinkName>
        <StatusBox>
          <Circle sx={() => statusColor(character.status)} />
          <CharacterTypographyStatus color={theme.light}>
            {character.status}-{character.species}
          </CharacterTypographyStatus>
        </StatusBox>
        <CharacterTypography color={theme.contrastText}>
          Last known location:
        </CharacterTypography>
        <CharacterLocation color={theme.light}>
          {character.location.name}
        </CharacterLocation>
        <CharacterTypography color={theme.contrastText}>
          First seen in:
        </CharacterTypography>
        <CharacterLocation color={theme.light}>
          {data?.data.name}
        </CharacterLocation>
      </CharacterContent>
    </CharacterCard>
  );
};
