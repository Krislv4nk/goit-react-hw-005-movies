import React, { useEffect, useState } from "react";
import { getMovieReviews } from "services/API";
import { useParams } from 'react-router-dom';

const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);
    
    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const data = await getMovieReviews(movieId);
setReviews(data);
if (data !== undefined) {
    console.log(data.length);
  }
  
            }catch (error) {
                console.log(error);
            }};
              
              fetchReviews(  )
    }, [movieId, setReviews]);
    
    return (
        <div>
            {reviews.length !==0? <h2>Reviews</h2>: reviews.length === 0 && <p>We don't have any reviews for this movie</p>}
                <ul>
                    {reviews.map(({ id, author, content }) => {
                        return (
                            <li key={id}>
                                <h3>{author}</h3>
                                <p>{content}</p>
                            </li>
                        );
                    })}
                </ul>
        </div>
    );
}
export default Reviews;