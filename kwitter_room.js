

var firebaseConfig = {
      apiKey: "AIzaSyDa2tICc_fSoJ9MHmImBsfZ0KdmD5dxenc",
      authDomain: "kwitter-cd9f8.firebaseapp.com",
      databaseURL: "https://kwitter-cd9f8-default-rtdb.firebaseio.com",
      projectId: "kwitter-cd9f8",
      storageBucket: "kwitter-cd9f8.appspot.com",
      messagingSenderId: "343072826567",
      appId: "1:343072826567:web:883475b706f380c1b64ae2",
      measurementId: "G-07617Y8NH7"
    };

    firebase.initializeApp(firebaseConfig);


function addRoom()
{
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
        purpose : "adding_room_name"
    
    });
    localStorage.setItem("room_name", room_name );
    window.location= "kwitter_page.html";


}




function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
    snapshot.forEach(function(childSnapshot) {
        childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - "+ Room_names);
      row = "<div class='room_name' id= " + Room_names + "onclick='redirectToRoomName(this.id)'>#"+ Room_names +" </div><hr>";
      document.getElementById("output").innerHTML += row;
 
      //End code
      });
    });
}
getData();

function addRoom(){
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
    });

    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
  }

  function logout() 
  {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "kwitter.html";
  }
