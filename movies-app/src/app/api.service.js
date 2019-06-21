import {API_KEY} from './api-key';

const BASE_URI = 'https://api.themoviedb.org';
const BASE_URI_IMAGE = 'https://image.tmdb.org/t/p/w500/';

export const api = [
  '$http',
  function ($http) {
    const defaults = {
      api_key: API_KEY
    };
    function trendingMovies() {
      return getUrl('/trending/movie/week');
    }
    function getUrl(_url) {
      const url = `${BASE_URI}/3${_url}`;
      return $http.get(url, {
        params: Object.assign({}, defaults)
      }).then(result => {
        console.log(`*** ${_url}`, result);
        return result;
      }).then(response => response.data.results.map(mapToMovieCard));
    }
    return {
      getUrl,
      trendingMovies
    };
  }];

function mapToMovieCard(movie) {
  return {
    title: movie.title,
    genre: movie.genre_ids,
    rating: Math.round(movie.vote_average / 2),
    image: `${BASE_URI_IMAGE}${movie.poster_path}`
  };
}
