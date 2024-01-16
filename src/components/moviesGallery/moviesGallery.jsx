import React, { useState, useEffect } from "react";
import css from "./moviesGallery.module.css";
import { MoviesList } from 'components/MoviesList/MoviesList';
import { getTrendingMovies } from 'services/API';
import { Loader } from 'components/Loader/Loader';
import { STATUSES } from 'helpers/constants';


export const MoviesGallery = () => {
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
        <MoviesList movies={movies} />
        

    </div>
  );
};

