	app.controller("classifiedsCtrl", function($timeout, $scope, $state, classifiedsFactory, $mdSidenav, $mdToast, $mdDialog) {

		var contact = {
			account: 1111111,
			phone: 11111111111,
			email: "a@a.com"
		}
		var vm = this;
		
		vm.activated = true;
		vm.classifieds = classifiedsFactory.ref

		vm.classifieds.$loaded().then(function(){
			vm.activated = false;
		})
		
		// classifiedsFactory.getClassifieds().then(function(classifieds) {
		// 	vm.classifieds = classifieds.data;
		// });

		$scope.$on('editClassified', function(event, data) {
			message('Data Save Successfully')
		});

		$scope.$on("newClassified", function(event, data) {
			var classified 					= data;
			classified.contact  = contact;
			vm.classifieds.$add(classified);
	  	message('Data Save Successfully')
		});

		vm.openSidebar = function() {
			$state.go('classified.new')
			vm.classified  = {};
		};

		vm.closeSidebar = function() {
			$mdSidenav('left').close();
			vm.classified  = {};
		};

		vm.saveClassified  = function(classified) {
			if (classified) {
				classified.contact = contact;
				vm.classifieds.push(classified);
				vm.classified  = {};
		  	$mdSidenav('left').close();
		  	message('Data Save Successfully')
		  }
		};

		vm.editForm = function(editClassified) {
			$state.go('classified.edit', {
				id: editClassified.$id,
			});
		}

		vm.saveEdit 		=  function() {
			vm.edit 			=  false
			vm.classified = {};
		  $mdSidenav('left').close();
		  message("Data Updated Successfully")
		}

		vm.deleteClassified = function(event, classified) {
			var confirm = $mdDialog.confirm()
				.title('Are you sure you want to delete ' + classified.title + '?')
				.ok('Yes')
				.cancel('No')
				.targetEvent(event);

			$mdDialog.show(confirm).then(function() {
				// var index = vm.classifieds.indexOf(classified)
				// vm.classifieds.splice(index, 1)
				vm.classifieds.$remove(classified).then(function(){
					message("Data Delete Successfully")	
				})	
			})
		}

		function message(msg) {
			$mdToast.show(
		    $mdToast.simple()
	       .textContent(msg)
	       .position('top, right')
	       .hideDelay(3000)
		  );
		}
	});