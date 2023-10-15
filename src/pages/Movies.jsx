// import { ProductList } from '../components/ProductList';
// import { getMovies } from '../fakeAPI';
import { Outlet, useLocation, useSearchParams } from 'react-router-dom';
import { Link } from '../App.styled.js';
// import MoviesDetails from '../MoviesDetails/MoviesDetails.jsx';

import SearchBox from '../SearchBox/SearchBox.jsx';
// import { MovieList } from 'components/MovieList/MovieList.jsx';
import { fetchQueryMovie } from 'components/Api.js';
import { Suspense, useEffect, useState } from 'react';

const Movies = () => {
  const [movieListQuery, setMovieListQuery] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    let abortCTRL = new AbortController();
    const fetchData = async () => {
      //
      // if (searchImg === '' && page === 1) {
      //   return;
      // }
      try {
        // ініціалізація абортконтролера
        if (abortCTRL.current) {
          abortCTRL.current.abort();
        }
        abortCTRL = new AbortController();

        const MovieListQuerys = await fetchQueryMovie({ query, abortCTRL });

        setMovieListQuery([
          ...MovieListQuerys,
          // .map(({ title, id, poster_path }) => ({ title, id, poster_path }))
        ]);
        // const film = fetchMovieInfoById(movieInfo);
      } catch {}
    };
    fetchData();
    return () => {
      abortCTRL.abort();
    };
  }, [query]);

  const handleSubmit = input => {
    if (query === '') {
      return setSearchParams({});
    }
    setSearchParams({ query: input });
  };

  //   const movieName = searchParams.get('name') ?? '';

  //   const visibleMovies = movieListQuery.filter(movie =>
  //       movie.name.toLowerCase().includes(movieName.toLowerCase())
  //     );

  const location = useLocation();
  //   const updateQueryString = (name) => {
  //     const nextParams = name !== "" ? { name } : {};
  //     setSearchParams(nextParams);
  //   };  movieListQuery
  return (
    <div>
      Movies
      <SearchBox handleSubmit={handleSubmit} />
      {movieListQuery && (
        <ul>
          {movieListQuery.map(film => (
            <li key={film.id}>
              <Link to={`${film.id}`} state={{ from: location }}>
                {film.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
    // <main>

    //   {/* <MoviesList products={products} /> */}
    //
    //   {/* <MoviesDetails /> */}

    // </main>
  );
};
export default Movies;
