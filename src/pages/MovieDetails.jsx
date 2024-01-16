import React, {useState, useEffect, useRef } from "react";
import { useParams } from 'react-router-dom';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Cast } from 'components/Cast/Cast';
import { Reviews } from 'components/Reviews/Reviews';
import { getMovieInfo } from "../services/API";
import { STATUSES } from "../helpers/constants";
import { MovieInfo } from "components/MovieInfo/MovieInfo";

import css from "./MovieDetails.module.css";


const MovieDetails = () => {
  const location = useLocation();
  const { movieId } = useParams();
  const [status, setStatus] = useState(STATUSES.idle);
  const [movie, setMovie] = useState({});
   const backLinkRef = useRef(location.state?.from ?? '/movie');

  useEffect(() => {
     try {
    setStatus(STATUSES.pending);
      getMovieInfo(movieId).then(response => {
        const data = response.data;
        if (data) {
          setStatus(STATUSES.success);
        } else {
          setStatus(STATUSES.error);
          setMovie({ message: 'Movie not found' });
        }
        });
} catch (error) {
  setStatus(STATUSES.error);
}
    
  }, [movieId]);

  if (status === STATUSES.pending) {
    return <div>Loading...</div>;
  } else if (status === STATUSES.error) {
    return <div>Error loading movie.</div>;
  } else if (status === STATUSES.success) {
    return (
      <div>
        <MovieInfo  />
        <div className={css.movieDetails}>
      <Link to={backLinkRef.current}>Go back</Link>
      <Reviews movie={movie}/>
      <Cast movie={movie}/>
      <ul className={css.navList}>
        <li className={css.navLinkItem}>
          <NavLink 
            className={({ isActive }) =>
              `${css.navLink} ${isActive ? css.active : ''}`
            }
            to="/movies/cast"
          >
            Cast
          </NavLink>
        </li>
        <li className={css.navLinkItem}>
          <NavLink
            className={({ isActive }) =>
              `${css.navLink} ${isActive ? css.active : ''}`
            }
            to="/movies/reviews"
          >
            Reviews
          </NavLink>
        </li>
      </ul>
    </div>
      </div>
    );
  } else {
    return <div>Error loading movie.</div>;
  }
}

export default MovieDetails;

