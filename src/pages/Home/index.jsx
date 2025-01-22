import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";

import { Card } from "../../components/Card";

import { BoxStyled } from "./style";
import { PaginationBox, PaginationButton } from "../../components/Card/style";
import { getAllCharacter } from "../../utils/data";
import { pageDecrement, pageIncrement, pageReset } from "../../features/page";

export const Home = () => {
  const pageState = useSelector((state) => state.otherReducer.page.page);
  const filterState = useSelector((state) => state.otherReducer.filter.filter);
  const themeState = useSelector((state) => state.persistedReducer.themes.themes);
  const dispatch = useDispatch();
  const { data, isLoading } = useQuery(
    [
      "character",
      pageState,
      filterState,
    ],
    () => getAllCharacter(pageState, filterState)
  );

  if (isLoading) {
    return <div>Data is loading...</div>;
  }

  const characterMap = data.data.results.map((character) => (
    <Card key={character.id} character={character} />
  ));

  return (
    <BoxStyled>
      {characterMap}
      <PaginationBox>
        <PaginationButton
          sx={{ bgcolor: themeState.main, color: themeState.contrastText }}
          disabled={pageState === 1 ? true : false}
          onClick={() => dispatch(pageDecrement())}
        >
          Prev
        </PaginationButton>
        <PaginationButton
          sx={{ bgcolor: themeState.main, color: themeState.contrastText }}
          onClick={() =>
            pageState === data.data.info.pages
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
