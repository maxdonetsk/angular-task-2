(function () {
    'use strict';

    angular
            .module('app')
            .controller('Users', function ($scope, Users) {
                $scope.showEditInput = 0;
                Users.getUsers().then(function (data) {
                    $scope.users = data;
                });
                $scope.deleteUser = Users.deleteUser;
                $scope.editUser = Users.editUser;
                $scope.addUser = Users.addUser;
            });
}());
