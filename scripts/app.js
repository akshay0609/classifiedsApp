app = angular.module('ngClassifieds', ["ngMaterial",'ui.router','firebase']);

	app.config(function($mdThemingProvider){ 

		$mdThemingProvider.theme('default')
			.primaryPalette('teal')
			.accentPalette('orange');

	});

	app.config(function($stateProvider,$urlRouterProvider) {

	  $stateProvider
	  	.state('classified', {
		    url: '/classified',
		    templateUrl: '/components/classifieds/classifieds.html',
		    controller: 'classifiedsCtrl as vm'
		  })
		  .state('classified.new', {
		  	url: '/new',
		  	templateUrl: '/components/classifieds/new/classifieds.new.html',
		  	controller: 'newClassifiedsCtrl as vm'
		  })
		  .state('classified.edit', {
		  	url: '/edit/:id',
		  	params: {
        	classified: null
        },
		  	templateUrl: '/components/classifieds/edit/classifieds.edit.html',
		  	controller: 'editClassifiedsCtrl as vm'
		  });

		$urlRouterProvider.otherwise('/classified');
});