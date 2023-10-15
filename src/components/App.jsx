import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
const Home = lazy(() => import('./pages/Home.jsx'));
const MoviesDetails = lazy(() =>
  import('./pages/MoviesDetails/MoviesDetails.jsx')
);
const Movies = lazy(() => import('./pages/Movies.jsx'));
const Reviews = lazy(() => import('../components/Reviews/Reviews.jsx'));
const Cast = lazy(() => import('../components/Cast/Cast.jsx'));
const NotFound = lazy(() => import('../components/NotFound/NotFound.jsx'));
const Layout = lazy(() => import('../components/Layout/Layout.jsx'));
const App = () => {
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
export default App;
