app.factory("classifiedsFactory", function($http, $firebaseArray) {
		
  var config = {
    databaseURL: "https://ngclassified-3aad3.firebaseio.com",
  };

  firebase.initializeApp(config);

	var ref = firebase.database().ref()

	return {
		ref: $firebaseArray(ref)
	}
})
