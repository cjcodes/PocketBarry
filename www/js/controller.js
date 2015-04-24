angular.module('PocketBarry.controllers', [])

.controller('SoundCtrl', function ($scope) {
  $scope.sounds = [
    {
      'file': 'souploaf.wav',
      'icon': 'ion-soup-can-outline',
      'title': 'souploaf'
    },
    {
      'file': 'pasta.wav',
      'icon': 'ion-beaker',
      'title': 'Pasta'
    },
    {
      'file': 'souploaf.wav',
      'icon': 'ion-soup-can-outline',
      'title': 'souploaf'
    },
  ];

  var preload = [];
  for (var i in $scope.sounds) {
    preload[$scope.sounds[i].file] = new Audio('sounds/' + $scope.sounds[i].file);
  }

  $scope.playSound = function (file) {
    preload[file].play();
  };
});
