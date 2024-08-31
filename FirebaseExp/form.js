//company data
var firebaseConfig = {
    apiKey: "AIzaSyCaaEsRaDYXR_ruNrIblDgM75R7AcvuYkQ",
    authDomain: "miranda-mind.firebaseapp.com",
    databaseURL: "https://miranda-mind-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "miranda-mind",
    storageBucket: "miranda-mind.appspot.com",
    messagingSenderId: "213513455453",
    appId: "1:213513455453:web:81648de70fb69457be0ab4"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    const auth = firebase.auth();
    function signUp(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
    alert("Signed Up");
    }
    function signIn(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
    }
    function signOut(){
    auth.signOut();
    alert("Signed Out");
    }
    auth.onAuthStateChanged(function(user){
    if(user){
    var email = user.email;
    alert("Active User " + email);
    //Take user to a different or home page
    //is signed in
    }else{
    alert("No Active User");
    //no user is signed in
    }
    });
