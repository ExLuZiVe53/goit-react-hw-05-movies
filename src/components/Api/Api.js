import axios from 'axios';

const AUTH_TOKEN =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZjgyMWE2YmUzMjY1NGJkMjY3NjMzZjdjOWI5ZDlhMCIsInN1YiI6IjY1MjgwMzk1ZWE4NGM3MDBjYTBmNjIzYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.k-n54P2F2h1RraKP3sH1dW3Slpezw0___sA28I-UCyY';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.common['accept'] = 'application/json';
//   /trending/get-trending список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.
export async function fetchMovieTrendToday(abortCTRL) {
  const response = await axios.get('trending/movie/day?language=en-US', {
    signal: abortCTRL.signal,
  });

  return response.data;
}

// /search/search-movies пошук фільму за ключовим словом на сторінці фільмів.
export async function fetchQueryMovie({ query, abortCTRL }) {
  const response = await axios.get('search/movie', {
    signal: abortCTRL.signal,
    params: {
      query: query,
      language: 'en-US',
      include_adult: false,
      page: 1,
    },
  });

  return response.data.results;
}
// /movies/get-movie-details запит повної інформації про фільм для сторінки кінофільму.
export async function fetchMovieInfoById({ id, abortCTRL }) {
  const response = await axios.get(`movie/${id}}`, {
    signal: abortCTRL.signal,
    params: {
      language: 'en-US',
      include_adult: false,
      append_to_response: 'credits, reviews',
    },
  });

  return response.data;
}

// /movies/get-movie-credits запит інформації про акторський склад для сторінки кінофільму.
export async function fetchCastById({ id, abortCTRL }) {
  const response = await axios.get(`movie/${id}/credits?language=en-US`, {
    signal: abortCTRL.signal,
  });
  return response.data.cast;
}

// /movies/get-movie-reviews запит оглядів для сторінки кінофільму.
export async function fetchReviewById({ id, abortCTRL }) {
  const response = await axios.get(`movie/${id}/reviews?language=en-US`, {
    signal: abortCTRL.signal,
  });

  return response.data.results;
}
