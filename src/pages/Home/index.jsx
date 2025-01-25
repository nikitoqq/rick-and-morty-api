import { useInfiniteQuery } from "@tanstack/react-query";
import { useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";

import { Card } from "../../components/Card";
import { LoaderCard } from "../../components/LoaderCard";

import { OfflinePage } from "../OfflinePage";

import { getAllCharacter } from "../../utils/data";
import { isOffline } from "../../utils/utils";

import { BoxStyled } from "./style";
import { useEffect } from "react";


export const Home = () => {
  const [filterState] = [
    useSelector((state) => state.otherReducer.filter.filter),
  ];

  const { data, isLoading, fetchNextPage } = useInfiniteQuery({
    queryKey: ["character", filterState],
    queryFn: ({ pageParam }) => getAllCharacter(pageParam, filterState),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) => {
      return lastPageParam + 1;
    },
  });

  const scrolling = () => {
    if (
      document.documentElement.scrollTop + window.innerHeight + 1 >=
      document.documentElement.scrollHeight
    ) {
      fetchNextPage();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrolling);
  }, []);
  if (isLoading) {
    return (
      <BoxStyled>
        <LoaderCard />
        <LoaderCard />
        <LoaderCard />
        <LoaderCard />
      </BoxStyled>
    );
  }

  const characterMap = data.pages.map((characterArr) =>
    characterArr.data.results.map((character) => (
      <Card key={character.id} character={character} />
    ))
  );

  return isOffline() ? <OfflinePage /> : <BoxStyled>{characterMap}</BoxStyled>;
};
