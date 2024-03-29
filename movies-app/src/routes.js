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
        movies: ['api', api => api.trendingMovies()]
      }
    })
    .state('app.details', {
      url: '/details?id',
      component: 'movieDetails',
      resolve: {
        movie: [
          'api', '$stateParams',
          (api, stateParams) => api.movie(stateParams.id)
        ]
      }
    });
}
