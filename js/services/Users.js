(function () {
    'use strict';

    angular
            .module('app')
            .factory('Users', function ($http) {
                var users = [];
                function getUsers() {
                    return $http.get('../data/users.json').then(function (result) {
                        users = result.data;
                        return users;
                    });
                }

                function deleteUser(user) {
                    users.splice(users[user.id - 1], 1);
                }

                function editUser(user) {
                    return angular.copy(user);
                }

                function addUser(user) {
                    user = {
                        id: users.length + 1,
                        username: user.username,
                        permissions: user.permissions
                    };
                    users.push(user);
                }

                return  {
                    getUsers: getUsers,
                    deleteUser: deleteUser,
                    editUser: editUser,
                    addUser: addUser
                };
            });
})();