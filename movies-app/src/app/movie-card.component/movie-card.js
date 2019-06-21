import './movie-card.scss';

const controller = [
  function () {
  }
];

export const movieCardComponent = {
  controller,
  template: require('./movie-card.html'),
  bindings: {
    data: '<'
  }
};
