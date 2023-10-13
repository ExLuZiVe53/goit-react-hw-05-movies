import { NavLink, Route, Routes } from 'react-router-dom';

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
        <Route />
        <Route />
        <Route />
        <Route />
      </Routes>
    </div>
  );
};
