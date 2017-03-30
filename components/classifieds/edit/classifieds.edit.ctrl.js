	app.controller('editClassifiedsCtrl', function(classifiedsFactory, $scope, $stateParams, $state, $timeout, $mdSidenav, $mdDialog){

		var vm 						= this;
		vm.closeSidebar 	= closeSidebar;
		vm.editsave 			= editSave;
		vm.classified 		= classifiedsFactory.ref.$getRecord($stateParams.id)

		$timeout(function(){
				$mdSidenav('left').open();
		});

		$scope.$watch('vm.sideNavOpen', function(sidenav) {
			if (sidenav === false) {
					$mdSidenav('left')
						.close()
						.then(function() {
							$state.go('classified');
						})
			}
		});

		function closeSidebar() {
			vm.sideNavOpen = false;
		}

		function editSave() {
			classifiedsFactory.ref.$save(vm.classified).then(function(){
				$scope.$emit("editClassified", "saved");
				vm.sideNavOpen = false;		
			})
		}
	})
