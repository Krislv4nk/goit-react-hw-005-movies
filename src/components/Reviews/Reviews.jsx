import React, { useEffect, useState } from "react";
import { getMovieReviews } from "services/API";
import { useParams } from 'react-router-dom';

 const Reviews = () => {
    const [reviews, setReviews] = useState([]);
const { movieId } = useParams();
    useEffect(() => {
        const fetchReviews = async () => {
            const response = await getMovieReviews(movieId);
            setReviews(response);
        };

        fetchReviews();
    }, [movieId, setReviews]);
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
export default Reviews;