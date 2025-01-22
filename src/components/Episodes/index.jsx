import { useQuery } from "react-query";

import { Loader } from "../Loader";

import { getEpisode } from "../../utils/data";

import { EpisodesTypography } from "./style";

export const Episodes = ({ episodes }) => {
  const { data, isLoading } = useQuery(["Episode", episodes], () => getEpisode(episodes));

  if (isLoading) {
    return <Loader/>;
  }

  const episodeMap = data.map((episode) => (
    <EpisodesTypography>{`Episode ${episode.id}: ${episode.name} `}</EpisodesTypography>
  ));
  return <>{episodeMap}</>;
};
