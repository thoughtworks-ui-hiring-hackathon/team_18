import angular from 'angular';
import 'angular-mocks';

describe('ratings component', () => {
  beforeEach(() => {
    angular
      .module('app', ['app/rating.component/rating.html']);
    angular.mock.module('app');
  });

  it('should render specific number of stars', angular.mock.inject(($rootScope, $compile) => {
    $rootScope.ratingData = {ctrl: {data: 3}};
    const element = $compile('<rating data="ratingData"></rating>')($rootScope);
    $rootScope.$digest();
    console.log(element);
    expect(element.find('.tw-rating').text().length).toEqual('***');
  }));
});
