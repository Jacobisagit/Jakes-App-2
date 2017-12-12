// initialize Firebase
var config =
{
  apiKey: "AIzaSyDFDxoGazUBvosljk5Q-pEWZkaYYc5Fuow",
  databaseURL: "https://jakesfire-1d263.firebaseio.com"
};
firebase.initializeApp(config);

var database = firebase.database();
var peopleDatabase = database.ref('sports');
var peopleList = [];

peopleDatabase.on('child_added', function( firebaseObject )
{
	var person = firebaseObject.val();
  	peopleList.push(person);
  	// "push" is JavaScript's lingo for "add to a list"
})

console.log(peopleList);
