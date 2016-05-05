(function () {
    'use strict';

    angular
            .module('app')
            .controller('Homepage', function ($scope, $translate, Languages, Users) {
                $scope.languages = [];
                $scope.selectedLanguage = '';
                Languages.getLanguages().then(function (data) {
                    $scope.languages = data;
                    $scope.selectedLanguage = $scope.languages[0];
                });
                $scope.setLanguage = function (language) {
                    $translate.use(language.abbr);
                };
                
                Users.getUsers().then(function (data) {
                    $scope.users = data;
                });
                $scope.deleteUser = Users.deleteUser;
                $scope.editUser = Users.editUser;
                $scope.addUser = Users.addUser;
            });
}());
