import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";

import { Card } from "../../components/Card";

import { BoxStyled } from "./style";
import { PaginationBox, PaginationButton } from "../../components/Card/style";
import { getAllCharacter } from "../../utils/data";
import {
  pageDecrement,
  pageIncrement,
  pageReset,
} from "../../toolkitRedux/toolkitSlice";

export const Home = () => {
  const page = useSelector((state) => state.toolkit.page);
  const filter = useSelector((state) => state.toolkit.filter);
  const dispatch = useDispatch();

  const { data, isLoading, isError } = useQuery(["character", page, filter.status.payload, filter.type.payload], () =>
    getAllCharacter(page, filter)
  );

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
          onClick={() => dispatch(pageDecrement())}
        >
          Prev
        </PaginationButton>
        <PaginationButton
          onClick={() =>
            page === data.data.info.pages
              ? dispatch(pageReset())
              : dispatch(pageIncrement())
          }
        >
          Next
        </PaginationButton>
      </PaginationBox>
    </BoxStyled>
  );
};
