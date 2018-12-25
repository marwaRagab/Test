const functions = require('firebase-functions');

var firebase = require("firebase-admin");

var serviceAccount = require("./serviceAccountKey.json");

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://my-firebase-project-898ee.firebaseio.com"
  });

  var db = firebase.database();
var ref = db.ref("restricted_access/secret_document");
ref.once("value", function(snapshot) {
  console.log(snapshot.val());
});

var usersRef = ref.child("users");
usersRef.set({
  alanisawesome: {
    date_of_birth: "June 23, 1912",
    full_name: "Alan Turing"
  },
  gracehop: {
    date_of_birth: "December 9, 1906",
    full_name: "Grace Hopper"
}
});
//var uid = "some-uid";
var additionalClaims = {
  premiumAccount: true
};

firebase.loginWithGoogle(token, function(err, result) {
	if (err)
		console.log(err);
	else
		console.log(result);
});

