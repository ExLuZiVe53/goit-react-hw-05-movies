// import { FilmCard } from 'components/FilmCard/FilmCard';
import React, { Suspense, useRef } from 'react';
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';

import { fetchMovieInfoById } from '../../components/Api/Api.js';
import { useEffect, useState } from 'react';
import { BackLink } from '../../components/BackLink/BackLink.jsx';

const MoviesDetails = () => {
  const { id } = useParams();
  const [filmInfo, setFilmInfo] = useState({});
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');
  useEffect(() => {
    const abortCTRL = new AbortController();
    const fetchData = async () => {
      try {
        const film = await fetchMovieInfoById({ id, abortCTRL });

        setFilmInfo(film);
      } catch {
      } finally {
      }
    };
    fetchData();
    return () => {
      abortCTRL.abort();
    };
  }, [id]);

  const {
    genres,
    title,
    overview,
    release_date,
    poster_path,
    vote_average,
    credits,
  } = filmInfo;

  // const backLinkHref = location.state?.from ?? '/';

  console.log('location.state.from', location.state?.from);
  console.log(backLinkHref);
  return (
    <div>
      <p>
        <BackLink to={backLinkHref.current}>GO BACK</BackLink>
      </p>
      {poster_path && (
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={title}
          width={200}
        />
      )}
      <div>
        {release_date && (
          <h2>
            {title} ({release_date.substring(0, 4)})
          </h2>
        )}
        {vote_average && <p>User Score {Math.round(vote_average * 10)}%</p>}
        <div>{overview}</div>
        <h3>Genres</h3>
        {genres && genres.length > 0 && (
          <div>{genres.map(genre => genre.name).join(' ')}</div>
        )}
      </div>
      <div>
        <h3>Aditional information</h3>
        <ul>
          <li
            style={{
              // display: 'flex',
              // justifyContent: 'center',
              marginBottom: '30px',
              // fontSize: 40,
              // color: '#010101',
            }}
          >
            <NavLink to="cast" cast={credits}>
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink to="reviews">Reviews</NavLink>
          </li>
        </ul>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default MoviesDetails;
