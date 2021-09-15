// Import the functions you need from the SDKs you need
const firebaseConfig = {
    apiKey: "AIzaSyBXDVTBktc-J0p_ucnik536gNQQtL92INY",
    authDomain: "kwitter-18123.firebaseapp.com",
    databaseURL: "https://kwitter-18123-default-rtdb.firebaseio.com",
    projectId: "kwitter-18123",
    storageBucket: "kwitter-18123.appspot.com",
    messagingSenderId: "52599641492",
    appId: "1:52599641492:web:7762b587f3e857ad176b81",
    measurementId: "G-YGW7E6GCYX"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser() {
    user_name = document.getElementById("user_name").value;

    localStorage.setItem("UserName", user_name);
    window.location = "Kwitter_room.html";
}