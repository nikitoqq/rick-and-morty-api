import { useQuery } from "react-query";
import { useState } from "react";

import { Card } from "../../components/Card";

import { BoxStyled } from "./style";
import { PaginationBox, PaginationButton } from "../../components/Card/style";
import { getAllCharacter } from "../../utils/data";

export const Home = () => {
  const [page, setPage] = useState(1);

  const { data, isLoading, isError } = useQuery(["character", page], () => getAllCharacter(page))

  //Доработать пагинацию

  if (isLoading) {
    return <div>Data is loading...</div>;
  }
  if (isError) {
    return <div>data is loaring error</div>;
  }
  const characterMap = data.data.results.map((character) => (
    <Card key={character.id} character={character} />
  ));
  return (
    <BoxStyled>
      {characterMap}
      <PaginationBox>
        <PaginationButton
          disabled={page === 1 ? true : false}
          onClick={() => setPage((page) => page - 1)}
        >
          Prev
        </PaginationButton>
        <PaginationButton
          disabled={page === 42 ? true : false}
          onClick={() => setPage((page) => page + 1)}
        >
          Next
        </PaginationButton>
      </PaginationBox>
    </BoxStyled>
  );
};
