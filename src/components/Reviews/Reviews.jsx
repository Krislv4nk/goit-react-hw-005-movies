import React, { useEffect, useState } from "react";
import { getMovieReviews } from "services/API";

export const Reviews = ({ id }) => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchReviews = async () => {
            const response = await getMovieReviews(id);
            setReviews(response);
        };

        fetchReviews();
    }, [id]);
    return (
        <ul>
            {reviews.map((review) => (
                <li key={review.id}>
                    <h3>{review.author}</h3>
                    <p>{review.content}</p>
                </li>
            ))}
        </ul>
    );
};