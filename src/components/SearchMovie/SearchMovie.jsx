import { useState, useEffect } from "react";
import { getSearchMovies } from "services/API";

export const SearchMovie = () => {
  const [query, setQuery] = useState('');
const [movies, setMovies] = useState([]);
  const handleSearch = event => {
    setQuery(event.target.value);
  };
useEffect(() => {
    if (query !== '') {
      getSearchMovies(query).then(data => setMovies(data.results));
    }
  }, [query]);
    return (
      <div>
      <form>
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="Search movie"
        />
      </form>
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
