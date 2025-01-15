import { Card } from "../../components/Card";
import { characters } from "../../utils/data";
import { BoxStyled } from "./style";

export const Home = () => {
  const charactersMap = characters.map((character) => {
    return <Card character={character} />;
  });
  return (
    <BoxStyled>
      {charactersMap}
      {charactersMap}
    </BoxStyled>
  );
};
