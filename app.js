var app = angular.module('plunker', ['ui.router']);

app.config([ '$stateProvider', '$urlRouterProvider',
		function($stateProvider, $urlRouterProvider) {
			$urlRouterProvider.otherwise("/home/flow");
			$stateProvider.state("home", {
				url : '/home',
				templateUrl : 'home.html',
			}).state("home.flow", {
				url : '/flow',
				template : 'flow'
			}).state("home.follow", {
				url : '/follow',
				template : 'follow'
			}).state("contact", {
				url : '/contact',
				template : 'contact',
			}).state("about", {
				url : '/about',
				template : 'about',
			});
		}]);
app.controller('MainCtrl', function($scope) {
  $scope.name = 'World';
});
