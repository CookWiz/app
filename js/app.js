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
    $scope.completedTasks = [];
    $scope.newTask = { 
        title: "", 
        description: "", 
        isdone: false, 
        reminderDate: "" 
    };
    
    $scope.focusDesc = function ($event) {
        if ($event.keyCode == 13)
        {
            $('#taskDesc').focus();
        }
    }
    
    $scope.finishTask = function ($index) {
        $scope.completedTasks.push($scope.tasks[$index]);
        $scope.deleteTask($index);
    }
    
    $scope.deleteTask = function ($index) {
        $scope.tasks.splice($index, 1);
    }
    
    $scope.addTaskEnter = function ($event) {
        if ($event.keyCode == 13)
        {
            $scope.tasks.push($scope.newTask);
            
            $scope.newTask = { 
                title: "", 
                description: "", 
                isdone: false, 
                reminderDate: "" 
            };
        }
    }
    
    $scope.addTaskButton = function ($event) {

            $scope.tasks.push($scope.newTask);
            
            $scope.newTask = { 
                title: "", 
                description: "", 
                isdone: false, 
                reminderDate: "" 
            };
    }
    
    $scope.toggleMenu = function () { 
        $ionicSideMenuDelegate.toggleLeft();
    };
});