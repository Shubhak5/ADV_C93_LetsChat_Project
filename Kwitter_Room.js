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


 user_name = localStorage.getItem("UserName");
 document.getElementById("welcomeUser").innerHTML = "Welcome " + user_name + " !!";

 function addRoom() {
     room_name = document.getElementById("inptRoomName").value;
     localStorage.setItem("roomName", room_name);

     firebase.database().ref("/").child(room_name).update({
         purpose: "Adding Room Name"
     });
     localStorage.setItem("RoomName", room_name);
     // window.location = "Kwitter_Message.html";
 }

 function getData() {
     firebase.database().ref("/").on('value', function(snapshot) {
         document.getElementById("divTredingRooms").innerHTML = "";
         snapshot.forEach(function(childSnapshot) {
             childKey = childSnapshot.key;
             Room_names = childKey;
             //Start code
             console.log("Room Name : " + Room_names);
             row = "<div class='roon_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>"
             document.getElementById("divTredingRooms").innerHTML += row;
             //End code
         });
     });
 }
 getData();

 function redirectToRoomName(name) {
     console.log(name);
     localStorage.setItem("room_name", name);
     window.location = "Kwitter_Message.html";
 }