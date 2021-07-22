var firebaseConfig = {
    apiKey: "AIzaSyD3j7BVloZlpc0QtjMULvMeZ7nyu_C5DTE",
    authDomain: "practice-project-2e868.firebaseapp.com",
    databaseURL: "https://practice-project-2e868-default-rtdb.firebaseio.com",
    projectId: "practice-project-2e868",
    storageBucket: "practice-project-2e868.appspot.com",
    messagingSenderId: "223896732430",
    appId: "1:223896732430:web:2e03c5e93e89f9315ccd5f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function adduser(){
      user_name=document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose:"adding user"
      }) ;
  }