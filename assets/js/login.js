// (function(){
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
  var txtEmail = document.getElementById('txtEmail');
  var txtPassword = document.getElementById('txtPassword'); 
  var btnLogin = document.getElementById('btnLogin'); 
  var btnSignUp = document.getElementById('btnSignUp'); 
  var btnLogout = document.getElementById('btnLogout');

  //add login event on click listener
  btnLogin.addEventListener('click', e =>{
    event.preventDefault(); 
    alert("click");
  	//Get email and pass 
  	var email = txtEmail.value; 
  	var pass = txtPassword.value; 
  	var auth = firebase.auth(); 
  	// sign in 
  	var promise = auth.signInWithEmailAndPassword(email, pass); 
  	promise.catch(e => console.log(e.message)); 
    console.log("hello"); 

  }); 

  //add signUp Event
  btnSignUp.addEventListener('click', e =>{
  	//Get email and pass
    //TO DO: check for real emails 
    event.preventDefault(); 
    alert("clicked"); 
  	var email = txtEmail.value; 
  	var pass = txtPassword.value; 
  	var auth = firebase.auth(); 
  	// sign in 
  	var promise = auth.createUserWithEmailAndPassword(email, pass); 
  	promise.catch(e => console.log(e.message)); 
  }); 

  //add a realtime Listener
  firebase.auth().onAuthStateChanged(firebaseUser => { 
  	if(firebaseUser) {

  		console.log(firebaseUser);
      location.href = "landingpage.html" 
  	} else{
  		console.log('not logged in'); 
  	}
  }); 

// }()); 
