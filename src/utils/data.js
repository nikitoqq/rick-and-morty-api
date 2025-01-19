import axios from "axios";

export const getAllCharacter = async (page, filter) =>
  axios(
    `https://rickandmortyapi.com/api/character?page=${page}&species=${
      filter.type.payload || ""
    }&status=${filter.status.payload || ""}`
  );

export const getCharacterById = async (id) =>
  axios(`https://rickandmortyapi.com/api/character/${id}`);

export const getFirstEpisode = (url) => {
  return axios(url);
};

export const getEpisode = async (urls) => {
  let res = [];
  for (let url in urls) {
    const { data } = await axios(urls[url]);
    res.push(data);
  }
  return res;
};
