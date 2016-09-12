# card-profile

This is a directive to add cards profile with medial social colors.
Colors profile available (snapchat, facebook, google analytics and twitter)

## Installation

1. Be sure that `AngularsJS 1.x`, `Bootstrap 3` (css only), `jQuery` and `Font Awesome` are imported.
2. Set `card-profile` as a dependency of your AngularJS module.
3. In index.html add the script `<script src="lib/card-profile-directive/card-profile-lib.js"></script>`
4. Add css in html `<link rel="stylesheet" href="lib/card-profile-directive/card-profile.css"/>`

## Usage

Add the dependency
```javascript
    angular.module('moduleName', ['card-profile']);
```

Type
```javascript
$scope.cards = [{
    type: 'googleAnalytics', //facebook, twitter, snapchat
    icon: 'fa-google',
    profile: {
        img: 'https://pbs.twimg.com/profile_images/685936667841146881/CEZU6gEV.png',
        name: 'Mestre dos Magos',
        screenName: 'master',
        email: 'master@gmail.com'
  }
}]
```

Create the list of cards colors
```javascript
    angular
        .module('moduleName', ['card-profile'])
        .controller('CardColorsCtrl', ['$scope', function($scope) {
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
        }]);
```
Add the directive `card-colors` in html:
```html
<body>
    ...
    <div ng-controller="CardProfileCtrl">
        <card-profile ng-repeat="card in cards" data="card"></card-profile>
    </div>
    ...
</body>
```
An example can be found in http://localhost:port/repository/app/#/card-profile