var firebaseConfig = {
    apiKey: "AIzaSyBuiOWmtr_EbsB3OfQjoAX-GxwgWS2trLM",
    authDomain: "kwitternew-7f1d7.firebaseapp.com",
    databaseURL: "https://kwitternew-7f1d7-default-rtdb.firebaseio.com",
    projectId: "kwitternew-7f1d7",
    storageBucket: "kwitternew-7f1d7.appspot.com",
    messagingSenderId: "264974485724",
    appId: "1:264974485724:web:6014484d0d038057670c19"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function submit(){
    user_name = document.getElementById("user").value;
    first = document.getElementById("one").value;
    second = document.getElementById("two").value;
    third = document.getElementById("three").value;
    forth = document.getElementById("four").value;
    fifth = document.getElementById("five").value;
    sixth = document.getElementById("six").value;
    seventh = document.getElementById("seven").value;
    eighth = document.getElementById("eight").value;
    ninth = document.getElementById("nine").value;
    tenth = document.getElementById("ten").value;

    firebase.datebase().ref("/").child(user_name).update({
        First : first
    });
}