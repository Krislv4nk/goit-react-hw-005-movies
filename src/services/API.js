// import { url, apiKey,AUTH_KEY } from "helpers/constants.js";
// import axios from "axios";;

// // список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці
  
// export const getTrendingMovies = async () => {
// const options = {
//   method: 'GET',
//   url: `${url}/trending/movie/day`,
//   params: {language: 'en-US', api_key: apiKey},
//   headers: {
//     accept: 'application/json',
//     Authorization: `Bearer ${AUTH_KEY}`
//   }
// };
//   try {
//     const  data = await axios.request(options);
//     return data;
    
//   }
//   catch (error) {
//     console.error('Error during fetch:', error);
//   }
// }




// // пошук фільму за ключовим словом на сторінці фільмів
// export const getSearchMovies = async (query) => {
//   const options = {
//   method: 'GET',
//   url: `${url}/search/movie`,
//   params: {language: 'en-US', api_key: apiKey},
//   headers: {
//     accept: 'application/json',
//     Authorization: `Bearer ${AUTH_KEY}`
//   }
// };
//   try {
//     const response = await axios(options);
//     return response.data;
//   }
//   catch (error) {
//     console.log('Error during fetch:',error);
//   }
// }



// запит повної інформації про фільм для сторінки кінофільму
// export const getMovieInfo = async (id) => {
//   const options = {
//   method: 'GET',
//   url: `${url}/movie/movie_id`,
//   params: {language: 'en-US', api_key: apiKey},
//   headers: {
//     accept: 'application/json',
//     Authorization: `Bearer ${AUTH_KEY}`
//   }
// };
//   try {
//   const data = await axios.get(options)
//     return data;
// }
// catch (error) {
//   console.log('Error during fetch:',error);
// }
// }
  
  
// // запит інформації про акторський склад для сторінки кінофільму

// export const getMovieCast = async (id) => {
//   try {
//   const data = await axios.get(`${url}/movie/${id}/credits?api_key=${apiKey}`);
//   return data.cast;
// }catch (error) {
//   console.log('Error during fetch:',error);
// }
// }


// //  запит оглядів для сторінки кінофільму

// export const getMovieReviews = async (id) => {
//   try {
//   const { data } = await axios.get(`${url}/movie/${id}/reviews?api_key=${apiKey}`);
//   return data.results;
// }
// catch (error) {
//   console.log('Error during fetch:',error);
// }
// }
