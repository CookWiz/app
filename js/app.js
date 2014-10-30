angular.module('TODO', ['ionic'])

.controller('TaskController', function ($scope, $ionicSideMenuDelegate) {
    $scope.tasks = loadTasks();
    /*
        [
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
    */
    
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
        window.localStorage.setItem('tasks', JSON.stringify($scope.tasks));
    }
    
    $scope.deleteTask = function ($index) {
        $scope.tasks.splice($index, 1);
        window.localStorage.setItem('tasks', JSON.stringify($scope.tasks));
    }
    
    $scope.addTaskEnter = function ($event) {
        if ($event.keyCode == 13)
        {
            $scope.tasks.push($scope.newTask);
            window.localStorage.setItem('tasks', JSON.stringify($scope.tasks));
            
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
            window.localStorage.setItem('tasks', JSON.stringify($scope.tasks));
            
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

function loadTasks() {
    var storage = window.localStorage;
    var data = storage.getItem('tasks');
    
    if (!data) {
        return [];
    }
    
    return JSON.parse(data);
};