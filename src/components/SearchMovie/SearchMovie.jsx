import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchMovies } from 'services/API';
import { STATUSES } from 'helpers/constants';
import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';
import css from './SearchMovie.module.css';

export const SearchMovie = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [status, setStatus] = useState(STATUSES.idle);
  const [movies, setMovies] = useState([]);
   const [previousQuery, setPreviousQuery] = useState('');

  const query = searchParams.get('sQuery');

  useEffect(() => {
    if (query && query.trim() !== '') {
      setMovies([]);
      setStatus(STATUSES.pending);
      setPreviousQuery(query);
      const searchMovieByQuery = async () => {
        try {
          const data = await getSearchMovies(query);
           
          if (Array.isArray(data.results)) {
            setMovies(data.results);
          } else {
            setMovies([data]);
          }
          setStatus(STATUSES.success);
         
          } catch (error) {
          
          setStatus(STATUSES.error);
        }
      };
      searchMovieByQuery();
    }
  }, [query]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.currentTarget.elements.query.value.trim();
    setSearchParams({
      sQuery: searchValue,
    });
  };

  return (
    <div className={css.container}>
      <form className={css.form} onSubmit={handleSearchSubmit}>
        <input className={css.input}
          type="text"
          name="query"
          placeholder="Search movie"
        />
        <button className={css.button} type="submit">Search</button>
      </form>
  {previousQuery && <h2 className={css.previousQuery}>Your previous query: "{previousQuery}"</h2>}
      {status === STATUSES.pending && <Loader />}
    {status === STATUSES.success && <MoviesList movies={movies} />}
    {status === STATUSES.idle && <div className={css.info}>Please, enter your query</div>}
    {status === STATUSES.error && <div className={css.info}>Something went wrong...</div>}
  </div>
  )
};
