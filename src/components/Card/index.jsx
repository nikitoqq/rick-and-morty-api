import {
  CharacterCard,
  CharacterLinkName,
  CharacterTypography,
  CharacterTypographyStatus,
  Image,
  CharacterContent,
  CharacterLocation,
} from "./style";

export const Card = ({ character }) => {
  return (
    <CharacterCard key={character.id}>
      <Image image={character.image} title={`${character.name} image`} />
      <CharacterContent>
        <CharacterLinkName to={"/Character"}>{character.name}</CharacterLinkName>
        <CharacterTypographyStatus>
          {character.status}-{character.species}
        </CharacterTypographyStatus>
        <CharacterTypography>Last known location:</CharacterTypography>
        <CharacterLocation>{character.lastLocation}</CharacterLocation>
        <CharacterTypography>First seen in:</CharacterTypography>
        <CharacterLocation>{character.firstSeen}</CharacterLocation>
      </CharacterContent>
    </CharacterCard>
  );
};
