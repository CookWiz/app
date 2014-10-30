angular.module('TODO', ['ionic'])

.controller('TaskController', function ($scope) {
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
})