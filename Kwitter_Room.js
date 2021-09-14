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

function addRoom() {
    room_name = document.getElementById("inptRoomName").value;
    localStorage.setItem("roomName", room_name);

    firebase.database().ref("/").child(room_name).update({
        purpose: "Adding Room Name"
    });
}