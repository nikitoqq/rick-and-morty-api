import { useQuery } from "react-query";
import { useSelector } from "react-redux";

import { Card } from "../../components/Card";
import { Loader } from "../../components/Loader";

import { OfflinePage } from "../OfflinePage";
import { AppFooter } from "../../components/AppFooter";

import { getAllCharacter } from "../../utils/data";
import { isOffline } from "../../utils/utils";

import { BoxStyled } from "./style";

export const Home = () => {
  const [pageState, filterState] = [
    useSelector((state) => state.otherReducer.page.page),
    useSelector((state) => state.otherReducer.filter.filter),
  ];

  const { data, isLoading } = useQuery(
    ["character", pageState, filterState],
    () => getAllCharacter(pageState, filterState)
  );

  if (isLoading) {
    return (
      <BoxStyled>
        <Loader />
      </ BoxStyled>
    );
  }

  const characterMap = data.data.results.map((character) => (
    <Card key={character.id} character={character} />
  ));

  return isOffline() ? (
    <OfflinePage />
  ) : (
    <BoxStyled>
      {characterMap}
      <AppFooter data={data} />
    </BoxStyled>
  );
};
