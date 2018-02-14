import firebase from 'firebase'

  var config = {
    apiKey: "AIzaSyAt35CufQCOQ4ADzk4WKIo0ZWM331LsvmM",
    authDomain: "firetest-92fa1.firebaseapp.com",
    databaseURL: "https://firetest-92fa1.firebaseio.com",
    projectId: "firetest-92fa1",
    storageBucket: "firetest-92fa1.appspot.com",
    messagingSenderId: "886146081205"
  };

var fire = firebase.initializeApp(config);

export default fire;
