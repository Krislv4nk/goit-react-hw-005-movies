import React from 'react';


// import { Loader } from 'components/Loader/Loader';
// import { STATUSES } from 'helpers/constants';
import { SearchMovie } from 'components/SearchMovie/SearchMovie';


const Movies = () => {
  
//   const [status, setStatus] = useState(STATUSES.idle);
//   const [movies, setMovies] = useState([]);


 

  


  return (
    <div>
      <SearchMovie/>


{/* {status === STATUSES.idle && <div>Waiting for action...</div>}
      {status === STATUSES.pending && <Loader status={status} />}
     {status === STATUSES.success && <div>Action was successful!</div>}
      {status === STATUSES.error && <div>Something went wrong...</div>} */}
      
    </div>
  );
};

export default Movies;
