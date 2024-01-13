import React, { useState, useEffect } from "react";
import css from "./moviesGallery.module.css";
import { getTrendingMovies } from 'services/API';
import { Loader } from 'components/Loader/Loader';
import { STATUSES } from 'helpers/constants';


export const MoviesList = () => {
  const [movies, setMovies] = useState([]);
    const [status, setStatus] = useState(STATUSES.idle);
    

    useEffect(() => {
      setStatus(STATUSES.pending);
    getTrendingMovies()
      .then(response => {
        const data = response.data;
        if (data && Array.isArray(data.results)) {
          setMovies(data.results);
        }
        setStatus(STATUSES.success);
      })
      .catch(error => {
        console.error('Error:', error);
      })
      .finally(() => {
        setStatus(STATUSES.idle);
      });
  }, []);
    return (
      
        <div className={css.moviesListContainer}>
             {status === STATUSES.pending && <Loader status={status}/>}
      <h2 className={css.pageTitle}>Only trending today</h2>
      <ul className={css.moviesList}>
      {movies.map(({ id, original_title, poster_path, title }) => (
        <li key={id} className={css.moviesListItem}>
          <img className={css.moviesListImg}
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={title}
          />
          <p className={css.moviesListTitle}>{original_title}</p>
        </li> 
      ))}</ul>
    </div>
  );
};