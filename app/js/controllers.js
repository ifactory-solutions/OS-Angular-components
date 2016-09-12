'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', [function() {

  }])
  .controller('MyCtrl2', [function() {

  }])
  .controller('DragDropCtrl', ['$scope', function($scope) {
    $scope.buckets = [{
      name: 'bucket1'
    }, {
      name: 'bucket2'
    }];
    $scope.currentData = {
      bucket: {}
    };
    $scope.columns = [{
      name: 'Firts Column'
    }];
    $scope.dragCallback = function(event, target, column) {
      $scope.currentData.column = column;
    };
    $scope.dropCallback = function(event, target, bucketName, $indexBucket) {
      if (!$scope.currentData.bucket[bucketName]) {
        $scope.currentData.bucket[bucketName] = [];
      }
      $scope.currentData.bucket[bucketName].push({
        name: $scope.currentData.column.name
      });
    };

  }])
  .controller('SimpleFilterCtrl', ['$scope', function($scope) {

    $scope.config = {
      style: {
        bg: '#00b8ff'
      },
      placeholder: 'Type here your search',
      nameSearched: ''
    };

    $scope.model = [{
      name: 'Laurindo',
      address: 'Travessa Cessar Magalhaes',
      phoneNumber: 9988776655,
      email: 'dslaurindo@gmail.com'
    }, {
      name: 'Teste',
      address: 'Avenue Square Park',
      phoneNumber: 7789899089,
      email: 'test@gmail.com'
    }];

  }])
    .controller('CardProfileCtrl', ['$scope', function($scope) {
      $scope.cards = [{
        type: 'googleAnalytics',
        icon: 'fa-google',
        profile: {
          img: 'https://pbs.twimg.com/profile_images/685936667841146881/CEZU6gEV.png',
          name: 'Mestre dos Magos',
          screenName: 'master',
          email: 'master@gmail.com'
        }
      }, {
        type: 'facebook',
        icon: 'fa-facebook',
        profile: {
          img: 'https://pbs.twimg.com/profile_images/676197614040145920/Hr44AVk6.jpg',
          name: 'Darth Vader',
          screenName: 'darthvader',
          email: 'dslaurindo@gmail.com'
        }
      }, {
        type: 'twitter',
        icon: 'fa-twitter',
        profile: {
          img: 'https://pbs.twimg.com/profile_images/685770502531497984/jHRmKJpP.jpg',
          name: 'Zuck',
          screenName: 'zuck',
          email: 'zuck@gmail.com'
        }
      }, {
        type: 'snapchat',
        icon: 'fa-snapchat',
        profile: {
          img: 'http://www.adweek.com/files/imagecache/node-detail/news_article/tt-snapchat-01-2015.jpg',
          name: 'Snapchat',
          screenName: 'snap',
          email: 'zuck@gmail.com'
        }
      }];
    }])
    .controller('CardColorsCtrl', ['$scope', function($scope) {
      $scope.colors = [{
        title: 'Hello',
        msg: 'Hello World',
        color: '00bcd4'
      }, {
        title: 'World',
        msg: 'World Cup',
        color: '8bc34a'
      }, {
        title: 'Test',
        msg: 'Final Test',
        color: 'b00c07'
      }, {
        title: 'Success',
        msg: 'Success Ever',
        color: '2196f3'
      }];
    }])
    .controller('AngularEasyLoadingCtrl', ['$scope', function($scope) {
      $scope.loading = true;
    }])
    .controller('ThrSlideshowCtrl', ['$scope', 'thrSlideshow', function($scope, thrSlideshow) {
      $scope.openSlideShow = function () {
        thrSlideshow.show([
          { path: 'lib/thr-slideshow/docs/images/coffe.jpg' },
          { path: 'lib/thr-slideshow/docs/images/aston_martin.jpg', description: 'Description' },
          { path: 'lib/thr-slideshow/docs/images/ice.jpg' }
        ]);
      };
    }])
    .controller('ThrPdfViewerCtrl', ['$scope', function($scope) {
      $scope.pdfViewer = {};
    }]);