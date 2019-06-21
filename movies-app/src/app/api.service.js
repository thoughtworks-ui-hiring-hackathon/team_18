import {API_KEY} from './api-key';

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
      const url = `https://api.themoviedb.org/3${_url}`;
      return $http.get(url, {
        params: Object.assign({}, defaults)
      // }).then(result => {
      //   console.log(`*** ${_url}`, result);
      //   return result;
      });
    }
    return {
      getUrl,
      trendingMovies
    };
  }];
