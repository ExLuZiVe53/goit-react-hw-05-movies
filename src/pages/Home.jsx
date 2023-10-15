import { useEffect, useState } from 'react';
import { fetchMovieTrendToday } from '../Api.js';
import { MovieList } from '../MovieList/MovieList.jsx';

const Home = () => {
  const [movieList, setMovieList] = useState([]);
  //  const location = useLocation();
  useEffect(() => {
    const abortCTRL = new AbortController();
    const fetchData = async () => {
      try {
        // ініціалізація абортконтролера
        if (abortCTRL.current) {
          abortCTRL.current.abort();
        }
        abortCTRL.current = new AbortController();

        const MovieListToday = await fetchMovieTrendToday(abortCTRL.signal);
        setMovieList([...MovieListToday.results]);
      } catch {
      } finally {
      }
    };
    fetchData();
    return () => {
      abortCTRL.abort();
    };
  }, []);

  return (
    <main>
      <MovieList movies={movieList} />
    </main>
  );
};
export default Home;
