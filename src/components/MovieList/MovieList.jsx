import { NavLink } from 'react-router-dom';

export const MovieList = ({ movies }) => {
  if (!movies) {
    return <p>"wait"</p>;
  }
  return (
    <ul>
      {movies.map(film => (
        <li key={film.id}>
          <NavLink to={`movies/${film.id}`}>{film.title}</NavLink>
        </li>
      ))}
    </ul>
  );
};
