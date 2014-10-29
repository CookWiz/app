var app = angular.module('cookWiz', ['ngRoute', 'ngTouch']);

app.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'views/main-screen.html',
        controller: 'MainController'
    })
    .when('/choose-event', {
        templateUrl: 'views/choose-event.html',
        controller: 'ChooseEventController'
    })
    .otherwise({ redirectTo: '/' });
});