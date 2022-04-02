import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'X-RapidAPI-Key': '8c32f19774mshe47f620a6bbdf93p1a1d8cjsn0baf97c78015'    },
  });
    
  return data;
}