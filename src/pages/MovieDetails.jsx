import React, {useState, useEffect, useRef } from "react";
import { useParams } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';
import { getMovieInfo } from "../services/API";
import  MovieInfo  from "components/MovieInfo/MovieInfo";
import css from "./MovieDetails.module.css";


const MovieDetails = () => {
  const location = useLocation();
  const { movieId } = useParams();
   const backLinkRef = useRef(location.state?.from ?? '/movie');
const [movieDetails, setMovieDetails] = useState(null);
 useEffect(() => {
    const fetchMovie = async () => {
      try {
        const movieInfo = await getMovieInfo(movieId);
        setMovieDetails(movieInfo);
      } catch (error) {
        console.log('Error during fetch:', error);
      }
    }
    fetchMovie();
  }, [movieId, setMovieDetails]);
  
  
    return (
        <div className={css.movieDetails}>
        <Link className={css.backLink} to={backLinkRef.current}>Go back</Link>
         <h1 className={css.title}>Movie details</h1>
           {movieDetails && <MovieInfo movieDetails={movieDetails} />}
      </div>
    );
  } 


export default MovieDetails;

