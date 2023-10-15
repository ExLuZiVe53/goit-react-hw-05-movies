import {
  NavLink,
  Outlet,
  useLocation,
  useSearchParams,
} from 'react-router-dom';
import SearchBox from '../components/SearchBox/SearchBox';

import { fetchQueryMovie } from '../components/Api/Api.js';
import { Suspense, useEffect, useState } from 'react';

const Movies = () => {
  const [movieListQuery, setMovieListQuery] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    let abortCTRL = new AbortController();
    const fetchData = async () => {
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

  const location = useLocation();

  return (
    <div>
      Movies
      <SearchBox handleSubmit={handleSubmit} />
      {movieListQuery && (
        <ul>
          {movieListQuery.map(film => (
            <li key={film.id}>
              <NavLink to={`${film.id}`} state={{ from: location }}>
                {film.title}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default Movies;
