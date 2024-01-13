import React, { useState, useEffect } from "react";
import { getSearchMovies } from "services/API";
import { Loader } from "components/Loader/Loader";
import { STATUSES } from "helpers/constants";

export const SearchMovie = (onSubmit) => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
 const [status, setStatus] = useState(STATUSES.idle);

  const handleSearch = event => {
    event.preventDefault();
    setQuery(event.target.elements.query.value);
    setMovies([]);
    setStatus(STATUSES.idle);

  };
  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(query);
    setQuery('');
    setMovies([]);
    setStatus(STATUSES.idle);

  }
useEffect(() => {
  if (query !== '') {
    setStatus(STATUSES.pending);
    getSearchMovies(query).then(data => {
      console.log(data);
      setMovies(data.results);
      setStatus(STATUSES.success);
      if (data.results.length === 0) {
        setStatus(STATUSES.error);
      }

    })
    .catch(error => {
        console.error('Error during fetch:', error);
        setStatus(STATUSES.error);
      });
  }
  
}, [query]);
    return (
      <div>
      <form onSubmit={handleSearch}>
        <input
            type="text"
            name="query"
          value={query}
          onChange={event => setQuery(event.target.value)}
          placeholder="Search movie"
          />
          <button onClick={handleSubmit} type="submit">Search</button>
        </form>
        
        {status === STATUSES.pending && <Loader />}
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
          </li>
        ))}
      </ul>
    </div>
    
  );
};
