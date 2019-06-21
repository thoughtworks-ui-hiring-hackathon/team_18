import './nav.scss';

const controller = [
  '$state',
  function ($state) {
    this.urls = [
      {
        url: $state.get('app.home').url,
        title: 'Home'
      },
      {
        url: $state.get('app.details').url,
        title: 'Details'
      }
    ];
  }
];

export const navComponent = {
  controller,
  template: require('./nav.html')
};
