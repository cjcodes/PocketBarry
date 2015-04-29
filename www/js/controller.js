angular.module('PocketBarry.controllers', [])

.controller('SoundCtrl', function ($scope) {
  $scope.sounds = [
    {
      'files': ['AwwYiss.mp3', 'AwwYiss2.mp3', 'AwwYiss3.mp3'],
      'icon': 'ion-soup-can-outline',
      'title': 'Aww Yiss'
    },
    {
      'files': ['Brutal.mp3'],
      'icon': 'ion-soup-can-outline',
      'title': 'Brutal'
    },
    {
      'files': ['Cheers.mp3', 'CheersCheersCheers.mp3'],
      'icon': 'ion-soup-can-outline',
      'title': 'Cheers'
    },
    {
      'files': ['Chib.mp3', 'Chib2.mp3', 'Chib3.mp3'],
      'icon': 'ion-soup-can-outline',
      'title': 'Chib'
    },
    {
      'files': ['Designy.mp3'],
      'icon': 'ion-soup-can-outline',
      'title': 'Designy'
    },
    {
      'files': ['Frontendy.mp3'],
      'icon': 'ion-soup-can-outline',
      'title': 'Frontendy'
    },
    {
      'files': ['IrnBru.mp3'],
      'icon': 'ion-soup-can-outline',
      'title': 'Irn Bru'
    },
    {
      'files': ['Pasta.mp3'],
      'icon': 'ion-soup-can-outline',
      'title': 'Pasta'
    },
    {
      'files': ['Potbelly.mp3', 'Potbelly2.mp3'],
      'icon': 'ion-soup-can-outline',
      'title': 'Potbelly'
    },
    {
      'files': ['Processes.mp3'],
      'icon': 'ion-soup-can-outline',
      'title': 'Processes'
    },
    {
      'files': ['Rubbish.mp3', 'Rubbish2.mp3'],
      'icon': 'ion-soup-can-outline',
      'title': 'Rubbish'
    },
    {
      'files': ['Schedule.mp3'],
      'icon': 'ion-soup-can-outline',
      'title': 'Schedule'
    },
    {
      'files': ['Skive.mp3', 'Skive2.mp3', 'Skive3.mp3'],
      'icon': 'ion-soup-can-outline',
      'title': 'Skive'
    },
    {
      'files': ['Systemy.mp3'],
      'icon': 'ion-soup-can-outline',
      'title': 'Systemy'
    },
    {
      'files': ['Totally.mp3', 'Totally2.mp3'],
      'icon': 'ion-soup-can-outline',
      'title': 'Totally'
    },
    {
      'files': ['Wanker.mp3', 'Wanker2.mp3', 'Wanker3.mp3', 'Wanker4.mp3'],
      'icon': 'ion-soup-can-outline',
      'title': 'Wanker'
    },
    {
      'files': ['WellUp.mp3'],
      'icon': 'ion-soup-can-outline',
      'title': 'Well Up'
    },
    {
      'files': ['Wreck.mp3', 'Wreck2.mp3'],
      'icon': 'ion-soup-can-outline',
      'title': 'Wreck'
    }
  ];

  $scope.playSound = function(sound) {
    sound = JSON.parse(sound); // ¯\_(ツ)_/¯
    var index = Math.floor(Math.random() * sound.files.length);
    var audio = new Audio('sounds/' + sound.files[index]);
    audio.play();
  };
});
