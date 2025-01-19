import { useQuery } from "react-query";
import { getEpisode } from "../../utils/data";
import { EpisodesTypography } from "./style";

export const Episodes = ({ episodes }) => {
  const { data, isLoading } = useQuery("Episode", () => getEpisode(episodes));

  if (isLoading) {
    return <></>;
  }

  const episodeMap = data.map((episode) => (
    <EpisodesTypography>{`Episode ${episode.id}: ${episode.name} `}</EpisodesTypography>
  ));
  return <>{episodeMap}</>;
};
