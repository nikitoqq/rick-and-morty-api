import axios from "axios";

export const getAllCharacter = async (page, filter) =>
  await axios(
    `https://rickandmortyapi.com/api/character?page=${page}&species=${
      filter.type || ""
    }&status=${filter.status || ""}`
  );

export const getCharacterById = async (id) =>
  await axios(`https://rickandmortyapi.com/api/character/${id}`);

export const getFirstEpisode = async (url) => await axios(url);

export const getEpisode = async (urls) => {
  let res = [];
  for (let url in urls) {
    const { data } = await axios(urls[url]);
    res.push(data);
  }
  return res;
};
