import React, { useRef } from "react";
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom';
import { Cast } from '../components/Cast/Cast';
import { Reviews } from '../components/Reviews/Reviews';
import { SampleMovie } from "../components/SampleMovie/SampleMovie";
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/movies');

  return (
    <div className={css.movieDetails}><h1 className={css.title}>Movie details</h1>
          <Link className={css.backLink} to={backLinkRef.current}>Go back</Link>
      <SampleMovie />
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
      <div>
        <Routes>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
        </Routes>
      </div>
    </div>
  );
}

export default MovieDetails;