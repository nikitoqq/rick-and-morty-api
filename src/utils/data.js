import axios from "axios";

export const getAllCharacter = (page, filter) => {
  const status = filter.status.payload === "none" ? '' : filter.status.payload
  const type = filter.type.payload === "none" ? '' : filter.type.payload
  return axios(`https://rickandmortyapi.com/api/character?page=${page}&species=${type || ''}&status=${status || ''}`)
};

export const getAllEpisode = () => {
  return getData("https://rickandmortyapi.com/api/episode");
};

export const getAllLocation = () => {
  return getData("https://rickandmortyapi.com/api/location");
};

export const getEpisode = (url) => {
  return axios(url);
}

const getData = async (url) => {
  let data = "",
    page = 1,
    results = [];
  do {
    data = await axios(`${url}?page=${page}`);
    results = results.concat(data.data.results);
    page++;
  } while (data.data.info.pages >= page);
  return results;
};
