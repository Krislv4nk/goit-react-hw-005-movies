import axios from "axios";;


const apiKey = '0bb5e486969da0e081671e4e0fafc6ed';
const ulr = 'https://api.themoviedb.org/3';

//  список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці

export const getTrendingMovies = async () => {
  try {
    const { data } = await axios.get(`${ulr}/trending/movie/day?api_key=${apiKey}`)

    return data;
  }
  catch (error) {
    console.log('Error during fetch:',error);
  }
}


// пошук фільму за ключовим словом на сторінці фільмів

export const getSearchMovies = async (query) => {
  try {
    const { data } = await axios.get(`${ulr}/search/movie?api_key=${apiKey}&query=${query}`)
    return data;
  }
  catch (error) {
    console.log('Error during fetch:',error);
  }
}


// запит повної інформації про фільм для сторінки кінофільму
export const getMovieInfo = async (id) => {
  try {
  const { data } = await axios.get(`${ulr}/movie/${id}?api_key=${apiKey}`)
    return data;
}
catch (error) {
  console.log('Error during fetch:',error);
}
}
  
  
// запит інформації про акторський склад для сторінки кінофільму

export const getMovieCast = async (id) => {
  try {
  const { data } = await axios.get(`${ulr}/movie/${id}/credits?api_key=${apiKey}`);
  return data.cast;
}catch (error) {
  console.log('Error during fetch:',error);
}
}


//  запит оглядів для сторінки кінофільму

export const getMovieReviews = async (id) => {
  try {
  const { data } = await axios.get(`${ulr}/movie/${id}/reviews?api_key=${apiKey}`);
  return data.results;
}
catch (error) {
  console.log('Error during fetch:',error);
}
}
