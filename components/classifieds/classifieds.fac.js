app.factory("classifiedsFactory", function($http, $firebaseArray) {
		
  var config = {
    databaseURL: __env.firebaseUrl,
  };

  firebase.initializeApp(config);
	var ref = firebase.database().ref()

	return {
		ref: $firebaseArray(ref)
	}
})
