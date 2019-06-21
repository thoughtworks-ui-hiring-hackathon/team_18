const controller = [
  function () {
    const ctrl = this;
    ctrl.$onChanges = function (changes) {
      const rating = changes.data.currentValue;
      let str = '';  // Use 'string'.repeat() after configuring babel
      for (let i = 0; i < Number(rating); i++) {
        str += '*'; // use unicode star
      }

      ctrl.ratingString = str;
    };
  }
];

export const ratingComponent = {
  controller,
  template: require('./rating.html'),
  bindings: {
    data: '<'
  }
};
