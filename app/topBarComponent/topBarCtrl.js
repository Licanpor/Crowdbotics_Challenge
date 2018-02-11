(function() {
  'use strict';
  angular
    .module('myApp')
    .component('barComponent', {
      templateUrl: '/app/topBarComponent/topBar.html',
      controller: topBarCtrl,
      controllerAs: 'vm'
    });

  function topBarCtrl($window) {
    var vm = this;
    var $win = angular.element($window);
    var $bar = $('.title-bar-wrapper');
    var $container = $('.container');

    $win.on("scroll", function () {
      if ($win.scrollTop() >= 50) {
        $bar.addClass("stuck");
        $container.addClass('mg-top');
      } else {
        $bar.removeClass("stuck");
        $container.removeClass('mg-top');
      }
    });
  }
})();
