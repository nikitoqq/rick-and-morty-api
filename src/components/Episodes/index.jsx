import { useQuery } from "@tanstack/react-query";

import { getEpisode } from "../../utils/data";

import { EpisodesTypography } from "./styled";

export const Episodes = ({ episodes }) => {
  const { data } = ({
    queryKey: ["Episode"],
    queryFn: () => getEpisode(episodes),
  });

  const episodeMap = data?.map((episode) => (
    <EpisodesTypography key={episode.id}>{`Episode ${episode.id}: ${episode.name} `}</EpisodesTypography>
  ));
  return <>{episodeMap}</>;
};
