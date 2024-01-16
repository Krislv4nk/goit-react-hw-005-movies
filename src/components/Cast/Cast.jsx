import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { getMovieCast } from "../../services/API";
import css from './Cast.module.css';


const Cast = () => {
    const [cast, setCast] = useState([]);
     const { movieId } = useParams();
    useEffect(() => {
        const fetchCast = async () => {
            const response = await getMovieCast(movieId);
            setCast(response);
        };

        fetchCast();
    }, [movieId, setCast]);

    return (
        <div className={css.castContainer}>
            <h2>Cast</h2>
            <ul className={css.castList}><li className={css.castItem}>
            {cast.map(({ id, name, profile_path, character }) => (
                <div key={id}>
                    <img className={css.castImg}
              src={
                   `https://image.tmdb.org/t/p/w200${profile_path}`}
              alt={name}
              width={208}
              height={300}
            />
                    <h3 className={css.castName}>{name}</h3>
                    <p className={css.castCharacter}>Role: {character}</p>
                </div>
            ))}
                </li></ul>
        </div>
    );
};
export default Cast;