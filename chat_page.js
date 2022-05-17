var firebaseConfig = {
    apiKey: "AIzaSyC8UTeCp2gI8gYPWOoaJIZg8krnqWTCPWE",
    authDomain: "what-s-sup.firebaseapp.com",
    databaseURL: "https://what-s-sup-default-rtdb.firebaseio.com",
    projectId: "what-s-sup",
    storageBucket: "what-s-sup.appspot.com",
    messagingSenderId: "775966961781",
    appId: "1:775966961781:web:c289d493cb82d366a4c83c"
  };

firebase.initializeApp(firebaseConfig);

function logout(){
    localStorage.removeItem("Room_Name");
    localStorage.removeItem("user_name");
    window.location = "index.html";
}

function back(){
    localStorage.removeItem("Room_Name");
    localStorage.removeItem("user_name");
    window.location = "main_page.html";
}

Room_Name = localStorage.getItem("Room_Name");
User_Name = localStorage.getItem("user_name");

function send(){
    MSG = document.getElementById("Msg").value;
    firebase.database().ref(Room_Name).push({
        name: User_Name,
        message: MSG,
        likes: 0,
    });

    document.getElementById("Msg").value = "";
    document.getElementById("Msg").placeholder = "Your message has been successfully sent!";

    setTimeout(function(){ 
        console.log("Ready");
        document.getElementById("Msg").placeholder = "Enter your message here";
    }, 4000);
}
