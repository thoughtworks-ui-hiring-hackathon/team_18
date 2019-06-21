export const api = [
  '$http',
  function ($http) {
    const defaults = {
      api_key: '8e324389a8ec73157c366565cc96a207'
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
