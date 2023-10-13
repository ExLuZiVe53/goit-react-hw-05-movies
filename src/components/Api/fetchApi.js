import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const API_KEY = 'af821a6be32654bd267633f7c9b9d9a0';

export async function getMovieTrends(currentPage) {
  try {
    const { data } = await axios.get(
      `trending/movie/day?api_key=${API_KEY}&page=${currentPage}`
    );

    console.log(data);
    return data.results;
  } catch (error) {
    return `${error.message}, please contact the administrator`;
  }
}
