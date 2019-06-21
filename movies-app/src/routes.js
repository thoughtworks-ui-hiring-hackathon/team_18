export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('app', {
      component: 'app'
    })
    .state('app.home', {
      url: '/home',
      component: 'home',
      resolve: {
        movies: [
          'api',
          function (api) {
            return api.trendingMovies()
              .then(response => response.data.results);
          }]
      }
    });
}
