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
room_name = localStorage.getItem("RoomName");

function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
        likes: 0
    });
}

function getData() {
    firebase.database().ref("/" + room_name).on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            childData = childSnapshot.val();
            if (childKey != "purpose") {
                firebase_message_id = childKey;
                message_data = childData;

                //Start code
                console.log(message_data);
                user_name = message_data['name'];
                message = message_data['message'];
                likes = message_data['likes'];

                // set up the tags
                name_with_tag = "<h4>" + user_name + "<img class='img_tick' src = 'tick.png'> </h4>";
                msg_with_tag = "<h4 class='msg_h4'>" + message + "</h4>";
                like_button = "<button class='btn btn-warning' id='" + firebase_message_id + "' value='" + likes + "' onclick='updateLikes(this.id)'>";
                span_tag = "<span class='glyphicon glyphicon-thumbs-up'> Like : " + likes + "</span></button><hr>";
                row = name_with_tag + msg_with_tag + like_button + span_tag;

                //set up the output messages
                document.getElementById("output").innerHTML += row;
                //End code/
            }
        });
    });
}
getData();

function updateLikes(mesage_id) {
    console.log("name inside the updateLikes : " + mesage_id);
    likes = document.getElementById(mesage_id).value;
    updated_likes = Number(likes) + 1;
    document.getElementById(mesage_id).value = updated_likes;
    firebase.database().ref(room_name).child(mesage_id).update({
        likes: updated_likes
    });
    document.getElementById(mesage_id).value = updated_likes;

}

function logout() {
    localStorage.removeItem(room_name);
    localStorage.removeItem(user_name);
    window.location.replace("index.html");
}