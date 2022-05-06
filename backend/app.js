//import { initializeApp } from "firebase/app";
import express from "express";

// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
// } from "firebase/auth";

import body_parser from "body-parser";
//import { getDatabase, ref, set, onValue, get, child } from "firebase/database";
//const express = require("express");
const express_app = express();
import http from "http";
//const http = require("http");
const server = http.createServer(express_app);
// const { SocketServer } = require("socket.io");
// const io = new Server(server);
// const auth = getAuth();
// const app = initializeApp(firebaseConfig);
// const db = getDatabase(firebase_app);
// const dbRef = ref(getDatabase());

const firebaseConfig = {
  apiKey: "AIzaSyAQrVmEij0MZ4l33nvDGXR93Pg4jyzF9JQ",
  authDomain: "testnodejs-c98d2.firebaseapp.com",
  projectId: "testnodejs-c98d2",
  storageBucket: "testnodejs-c98d2.appspot.com",
  messagingSenderId: "617972834114",
  appId: "1:617972834114:web:5b68bedb92fbb65b21b2db",
  measurementId: "G-HJ1LRZL788",
};
// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/index.html");
// });

// io.on("connection", (socket) => {
//   console.log("a user connected");
//   socket.on("disconnect", () => {
//     console.log("user disconnected");
//   });
//   socket.on("chat message", (msg) => {
//     socket.broadcast.emit("chat message", msg);
//   });
// });

// server.listen(4545, () => {
//   console.log("listening on *:4545");
// });

//todo: comment

let userId = 1;

function writeUserData(userId, name, email, ids) {
  set(ref(db, "users/" + userId), {
    name: name,
    email: email,
    ids: ids,
  });
}

// const starCountRef = ref(db, 'posts/' + userId + '/starCount');
// onValue(starCountRef, (snapshot) => {
//     const data = snapshot.val();
//     console.log(data.toString())
// });
// let users = [];
// get(child(dbRef, `users/${userId}`))
//   .then((snapshot) => {
//     if (snapshot.exists()) {
//       users[0] = snapshot.val();
//       console.log(snapshot.val());
//     } else {
//       console.log("No data available");
//     }
//   })
//   .catch((error) => {
//     console.error(error);
//   });

//todo: sending api

server.use(function (req, res, next) {
  console.log("Time:", Date.now());
  console.log(JSON.stringify(users));
  body_parser.json();
  next();
});
server.use(body_parser.urlencoded({ extended: true }));

server.post("/signup", function (req, res) {
  console.log(req.body);
});
server.listen(3000, function () {
  console.log("Server running");
});

//authication

// let userr = { email: "sayedkhaledsa@gmail.com", name: "sayed", ids: [2, 3] };
// let userpass = "123";
// //todo:creating new user
// createUserWithEmailAndPassword(auth, userr.email, userpass)
//   .then((userCredential) => {
//     // Signed in
//     const use2 = userCredential.user;
//     // console.log(use2);
//     console.log(use2.uid);

//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     console.log(error);

//     // ..
//   });
// writeUserData(userId, userr.name, userr.email);

//todo: sign in

// signInWithEmailAndPassword(auth, user.getEmail(), user.getPassword())
//     .then((userCredential) => {
//         // Signed in
//         const user = userCredential.user;
//         console.log(user.uid)
//         // ...
//     })
//     .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         console.log(error)
//     });
