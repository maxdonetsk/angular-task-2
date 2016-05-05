(function () {
    'use strict';

    angular
            .module('app', ['pascalprecht.translate'])
            .config(['$translateProvider', function ($translateProvider) {
                    $translateProvider.translations('en', {
                        'TITLE': 'Manage users',
                        'NAME': 'Name',
                        'PERMISSIONS': 'Permissions',
                        'ACTIONS': 'Actions'
                    });

                    $translateProvider.translations('de', {
                        'TITLE': 'Benutzer verwalten',
                        'NAME': 'Name',
                        'PERMISSIONS': 'Berechtigungen',
                        'ACTIONS': 'Aktionen'
                    });

                    $translateProvider.translations('ru', {
                        'TITLE': 'Управление пользователями',
                        'NAME': 'Имя',
                        'PERMISSIONS': 'Доступ',
                        'ACTIONS': 'Действия'
                    });

                    $translateProvider.preferredLanguage('en');
                }]);
}());
