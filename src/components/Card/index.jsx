import { CardContent } from "@mui/material";
import {
  CharacterCard,
  CharacterLink,
  CharacterLinkName,
  CharacterTypography,
  CharacterTypographyStatus,
  Image,
  CharacterContent,
} from "./style";

export const Card = ({ character }) => {
  return (
    <CharacterCard key={character.id}>
      <Image image={character.image} title={`${character.name} image`} />
      <CharacterContent>
        <CharacterLinkName>{character.name}</CharacterLinkName>
        <CharacterTypographyStatus>
          {character.status}-{character.species}
        </CharacterTypographyStatus>
        <CharacterTypography>Last known location:</CharacterTypography>
        <CharacterLink>{character.lastLocation}</CharacterLink>
        <CharacterTypography>First seen in:</CharacterTypography>
        <CharacterLink>{character.firstSeen}</CharacterLink>
      </CharacterContent>
    </CharacterCard>
  );
};
