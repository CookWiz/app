angular.module('TODO', ['ionic'])

.controller('TaskController', function ($scope, $ionicSideMenuDelegate) {
    $scope.tasks = [
        { 
            title: "Create app", 
            description: "Create a mobile app", 
            isdone: false, 
            reminderDate: "" 
        },
        { 
            title: "Create app2", 
            description: "Create a mobile app2", 
            isdone: false, 
            reminderDate: "" 
        },
        { 
            title: "Create app2", 
            description: "Create a mobile app2", 
            isdone: false, 
            reminderDate: "" 
        },
        { 
            title: "Create app2", 
            description: "Create a mobile app2", 
            isdone: false, 
            reminderDate: "" 
        },
        { 
            title: "Create app2", 
            description: "Create a mobile app2", 
            isdone: false, 
            reminderDate: "" 
        }
    ];
    
    $scope.toggleMenu = function () { 
        $ionicSideMenuDelegate.toggleLeft();
    };
});