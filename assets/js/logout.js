
$(document).ready(function() {
//Initialize Firebase 
  var config = {
    apiKey: "AIzaSyA7i_7yLZxHJxRmtHqvYFepccrvGxbrie8",
    authDomain: "nutritrack-smu.firebaseapp.com",
    databaseURL: "https://nutritrack-smu.firebaseio.com",
    projectId: "nutritrack-smu",
    storageBucket: "nutritrack-smu.appspot.com",
    messagingSenderId: "1078293750813"
  };
  firebase.initializeApp(config);

  //Get Elements 
  var btnLogout = document.getElementById('btnLogout');

  btnLogout.addEventListener('click', e=>{
    firebase.auth().signOut(); 
    console.log('clicked')
    location.href = "index.html" 
  }); 
}); 
