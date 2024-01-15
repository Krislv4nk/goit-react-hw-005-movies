import React, { useState, useEffect } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import { getMovieInfo } from "services/API";
import css from "./SampleMovie.module.css";
import { STATUSES } from "helpers/constants";

export const SampleMovie = () => {
  const location = useLocation();
  const { movie_id } = useParams();
  const [status, setStatus] = useState(STATUSES.idle);
  const [movie, setMovie] = useState({});

    useEffect(() => {
    const fetchMovie = async () => {
        if (!movie_id) {
            setStatus(STATUSES.error);
        }
        const data = await getMovieInfo(movie_id);
        setMovie(data);
    }
   fetchMovie();
},
    
 [movie_id,status]);

  if (status === STATUSES.pending) {
    return <div className={css.loader}>Loading...</div>;
  } else if (status === STATUSES.error) {
    return <div className={css.loader}>Error loading movie.</div>;
  } else if (status === STATUSES.success) {
    return (
      <div className={css.movieDetails}>
        <Link className={css.moviesListLink} to={`/movies/${movie.id}`} state={{ from: location }}></Link>
        <img
          className={css.moviePoster}
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.original_title}
        />
        <ul className={css.movieInfo}>
          <li className={css.movieTitle}>{movie.original_title}</li>
          <li>Release date: {movie.release_date}</li>
          <li>Rating: {movie.vote_average} ({movie.vote_count} votes)</li>
          <li className={css.movieOverview}>{movie.overview}</li>
          <li>
            Genres:{" "}
            {movie.genres.map((genre) => (
              <span key={genre.id} className={css.genre}>
                {genre.name}
              </span>
            ))}
          </li>
        </ul>
      </div>
    );
  } else {
    return null;
  }
};