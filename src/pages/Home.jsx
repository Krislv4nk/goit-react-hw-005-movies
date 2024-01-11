
import React, { useEffect, useState } from 'react';
import {getTrendingMovies } from '../services/API'
import {MoviesList} from 'components/moviesGallery/moviesGallery'


const Home = () => {
  const [movies, setMovies] = useState([]);


  useEffect(() => {
    getTrendingMovies()
        .then(response => {
            const data = response.data;
       if (data && Array.isArray(data.results)) {
           setMovies(data.results);
        }
      })
      .catch(error => {
        console.error('Error:', error);
      })
  })
  return (
    <div>
      <h1>Home</h1>
          
          <MoviesList movies={movies} />
    </div>
  );
};
export default Home;