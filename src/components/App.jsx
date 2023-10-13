import { NavLink, Route, Routes } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import Movies from 'pages/Movies';
import MovieDetails from 'pages/MovieDetails';
import Cast from 'pages/Cast';
import Reviews from 'pages/Reviews';

export const App = () => {
  return (
    <div>
      <header>
        <nav>
          <NavLink className="header-link" to="/">
            Home
          </NavLink>
          <NavLink className="header-link" to="/movies">
            Movies
          </NavLink>
          <NavLink className="header-link" to="/movies/:movieId">
            MovieDetails
          </NavLink>
          <NavLink className="header-link" to="/movies/:movieId/cast">
            Cast
          </NavLink>
          <NavLink className="header-link" to="/movies/:movieId/reviews">
            Reviews
          </NavLink>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="/movies/:movieId/cast" element={<Cast />} />
        <Route path="/movies/:movieId/reviews" element={<Reviews />} />
      </Routes>
    </div>
  );
};
