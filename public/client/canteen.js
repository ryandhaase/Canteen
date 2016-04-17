angular.module('canteen', [
  'canteen.landingPage',
  'canteen.navBar',
  'canteen.tripForm',
  'canteen.taskForm',
  'canteen.tripData',
  'canteen.taskView',
  'canteen.trip',
  'ngMap',
  'ui.bootstrap',
  'ui.router',
])
.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/landing-page');
  $stateProvider
    .state('landingPage', {
      url: '/landing-page',
      templateUrl: 'client/landingPage/landingPage.html',
      controller: 'landingPage',
    })
    .state('tripForm', {
      url: '/trip-form',
      templateUrl: 'client/trip-form/tripForm.html',
      controller: 'tripForm',
    })
    .state('tripView', {
      url: '/trip',
      templateUrl: 'client/trip/tripView.html',
      controller: 'tripCtrl',
    });
});
