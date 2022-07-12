
const firebaseConfig = {
    apiKey: "AIzaSyAEG6ysDQWfW-XxXt7ZnIv7GOn9_m5Gmzo",
    authDomain: "letschat-56305.firebaseapp.com",
    projectId: "letschat-56305",
    storageBucket: "letschat-56305.appspot.com",
    messagingSenderId: "643921165483",
    appId: "1:643921165483:web:acc7149e8224de2bdc4bee"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  


// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



