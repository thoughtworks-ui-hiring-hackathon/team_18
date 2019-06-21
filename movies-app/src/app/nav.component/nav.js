const controller = [
  '$state',
  function ($state) {
    this.urls = [
      {
        url: $state.get('app.home').url,
        title: 'Home'
      }
    ];
  }
];

export const navComponent = {
  controller,
  template: require('./nav.html')
};
