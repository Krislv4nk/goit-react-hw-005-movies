import React, { useEffect, useState } from "react";
import { getMovieCast } from "../../services/API";

 const Cast = ({ id }) => {
    const [cast, setCast] = useState([]);

    useEffect(() => {
        const fetchCast = async () => {
            const response = await getMovieCast(id);
            setCast(response);
        };

        fetchCast();
    }, [id]);

    return (
        <div>
            <h2>Cast</h2>
            {cast.map((actor, index) => (
                <div key={index}>
                    <h3>{actor.name}</h3>
                    <p>Role: {actor.character}</p>
                </div>
            ))}
        </div>
    );
};
export default Cast;