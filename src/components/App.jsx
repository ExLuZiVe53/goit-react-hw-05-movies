import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
const Home = lazy(() => import('../pages/Home'));
const MoviesDetails = lazy(() =>
  import('../pages/MoviesDetails/MoviesDetails')
);
const Movies = lazy(() => import('../pages/Movies.jsx'));
const Reviews = lazy(() => import('./Reviews/Reviews.jsx'));
const Cast = lazy(() => import('./Cast/Cast.jsx'));
const NotFound = lazy(() => import('./NotFound/NotFound.jsx'));
const Layout = lazy(() => import('./Layout/Layout.jsx'));
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index="home" element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:id" element={<MoviesDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
