import axios from "axios";

export const getAllCharacter = async (pageParam, filter) =>
  await axios(
    `https://rickandmortyapi.com/api/character?page=${pageParam}&species=${
      filter.type || ""
    }&status=${filter.status || ""}`
  );

export const getCharacterById = async (id) => {
  const { data } = await axios(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  const episodes = await getEpisode(data.episode);
  return [data, episodes]
};

export const getFirstEpisode = async (url) => await axios(url);

export const getEpisode = async (urls) => {
  let res = [];
  for (let url of urls) {
    const { data } = await axios(url);
    await res.push(data);
  }
  return await res;
};
