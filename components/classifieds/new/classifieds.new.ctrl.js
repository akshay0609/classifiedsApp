	app.controller('newClassifiedsCtrl', function(classifiedsFactory, $scope, $state, $timeout, $mdSidenav, $mdDialog){

		var vm 						= this;
		vm.closeSidebar 	= closeSidebar;
		vm.saveClassified = saveClassified;

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

		function saveClassified(classified) {
			if(classified) {
				$scope.$emit("newClassified", classified);
				vm.sideNavOpen = false;	
			}
		}
	})
