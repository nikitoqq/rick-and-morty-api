import { useQuery } from "react-query";
import { getEpisode } from "../../utils/data";

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

export const Card = ({ character }) => {
  const { data } = useQuery("Seen", () => getEpisode(character.episode[0]));

  const statusColor = () => {
    if (character.status === "Alive") {
      return { backgroundColor: "#55cc44" };
    } else if (character.status === "Dead") {
      return { backgroundColor: "#d63d2e" };
    } else {
      return { backgroundColor: "#9e9e9e" };
    }
  };

  return (
    <CharacterCard key={character.id}>
      <Image image={character.image} title={`${character.name} image`} />
      <CharacterContent>
        <CharacterLinkName to={"/Character"}>
          {character.name}
        </CharacterLinkName>
        <StatusBox>
          <Circle sx={statusColor} />
          <CharacterTypographyStatus>
            {character.status}-{character.species}
          </CharacterTypographyStatus>
        </StatusBox>
        <CharacterTypography>Last known location:</CharacterTypography>
        <CharacterLocation>{character.location.name}</CharacterLocation>
        <CharacterTypography>First seen in:</CharacterTypography>
        <CharacterLocation>{data?.data.name}</CharacterLocation>
      </CharacterContent>
    </CharacterCard>
  );
};
