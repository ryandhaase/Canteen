angular.module('canteen.taskForm', [
  'canteen.forms',
  'canteen.tripData',
])

//grab tripId from parent controller
.controller('taskForm', [
  '$scope',
  'formFactory',
  'trip',
  function ($scope, formFactory, trip) {
    $scope.taskForm = {
      statusCode: 0,
    };
    $scope.bullets = [];
    $scope.task = {
      bullet: '',
    };

    $scope.addBullet = function () {
      $scope.bullets.push($scope.task.bullet);
      $scope.task = {};
    };

    $scope.createTask = function () {
      $scope.taskForm.bullets = $scope.bullets;
      formFactory.submitTask($scope.taskForm, $scope.trip._id);

      $scope.taskForm = {
        statusCode: 0,
      };

      $scope.bullets = [];
      trip.getTrip(function (trip) {
        $scope.$parent.trip = trip;
      });
    };
  },
]);
