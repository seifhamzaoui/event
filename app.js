// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBNyz-EtM88ZIl6uKizSTrOk4yLkNe7IeE",
    authDomain: "eventlistener-3b911.firebaseapp.com",
    projectId: "eventlistener-3b911",
    storageBucket: "eventlistener-3b911.appspot.com",
    messagingSenderId: "17156874601",
    appId: "1:17156874601:web:1bf020b3a837326ea95df8"
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();


if (!window.localStorage.getItem("IP")) {
    axios.get("https://api.ipgeolocation.io/getip")
        .then((data) => {
            window.localStorage.setItem('IP', data.data.ip);
        });
}

var ads = document.querySelectorAll(".ad");

ads.forEach((ad) => {
    ad.onclick = function (event) {
        db.collection("IPS").add({
            type : "click",
            created : firebase.firestore.FieldValue.serverTimestamp(),
            page : window.location.href
        }) 
    }
})


