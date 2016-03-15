export default {
  transclude: true,
  template: require('./books.html'),
  bindings: {
    books: '<'
  },
  controller: function () {
    var vm = this;

    vm.$onInit = function () {
      console.info('books:', vm.books);

    };
  }
}