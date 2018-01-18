export default ($urlRouterProvider, $stateProvider, $locationProvider) => {
    'use strict';
    'ngInject';

    $locationProvider.html5Mode(false);

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('clusterIndices', {
            url: '/clusters/:clusterName/indices',
            template: require('./containers/cluster-indices/cluster-indices.view.html'),
            controller: 'clusterIndicesController',
            controllerAs: 'clusterIndicesCtrl'
        })
        .state('clusterDetails', {
            url: '/clusters/:clusterName',
            template: require('./containers/cluster-details/cluster-details.view.html'),
            controller: 'clusterDetailsController',
            controllerAs: 'clusterDetailsCtrl'
        })
        .state('home', {
            url: '/',
            template: require('./containers/home/home.view.html'),
            controller: 'homeController',
            controllerAs: 'homeCtrl'
        });
}