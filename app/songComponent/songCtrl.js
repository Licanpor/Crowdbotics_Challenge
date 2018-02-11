(function() {
  'use strict';
  angular
    .module('myApp')
    .component('songComponent', {
      templateUrl: '/app/songComponent/songs.html',
      controller: songCtrl,
      controllerAs: 'vm'
    });

  songCtrl.$inject = ['$location', '$http'];
  function songCtrl($location, $http ) {
    var vm = this;

    var $asideH = $('aside').outerHeight(true) + 4;
    vm.hgt = {"height": $asideH};

    $http.get("https://itunes.apple.com/search?term=taylor+swift&limit=200&country=us&media=music&entity=song")
    .then(function(response) {
      vm.songs = response.data.results;
      for (var i = 0; i < vm.songs.length; i++) {
        var song = vm.songs[i];
        vm.trackName = song.trackName;
        vm.collectionName = song.collectionName;
        vm.trackId = song.trackId;
      }
    });
  }
})();
