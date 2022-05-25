import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getDatabase, ref, set, onValue, get, child } from "firebase/database";
const app = express();

const firebaseConfig = {
  apiKey: "AIzaSyAQrVmEij0MZ4l33nvDGXR93Pg4jyzF9JQ",
  authDomain: "testnodejs-c98d2.firebaseapp.com",
  projectId: "testnodejs-c98d2",
  storageBucket: "testnodejs-c98d2.appspot.com",
  messagingSenderId: "617972834114",
  appId: "1:617972834114:web:5b68bedb92fbb65b21b2db",
  measurementId: "G-HJ1LRZL788",
};

const firebase_app = initializeApp(firebaseConfig);
const db = getDatabase(firebase_app);
/***
 * apis
 */
app.use(cors()); // Use this after the variable declaration
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
let my_logedin_user;
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.post("/signupdata", function(req, res) {
  console.log(req.body);
  // getDatabaseData(req,res);
  if (req.body === "caretaker") {
    (async () => {
      const my_user = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        type: req.body.type,
      };
      const dbRef = ref(getDatabase());
      let my_users = [];
      get(child(dbRef, `users`))
        .then(async (snapshot) => {
          if (snapshot.exists()) {
            my_users = snapshot.val();
            let flag = 0;
            for (let i = 0; i < my_users.length; i++) {
              if (my_users[i].email === my_user.email) flag = 1;
            }
            if (flag == 1) {
              res.send(false);
            } else {
              const val = await writeUserData(
                my_users.length,
                my_user,
                req.body.password,
                res
              );

              // res.send(val);
              my_logedin_user = my_user.email;
            }
          } else {
            console.log("No data available");
            return NaN;
          }
        })
        .catch((error) => {
          console.error(error);
        });
    })();
  } else {
    (async () => {
      const dbRef = ref(getDatabase());
      let my_users = [];
      get(child(dbRef, `users`))
        .then(async (snapshot) => {
          if (snapshot.exists()) {
            my_users = snapshot.val();
            let flag = 0;
            for (let i = 0; i < my_users.length; i++) {
              if (my_users[i].email === req.body.email) flag = 1;
            }
            if (flag == 1) {
              res.send(false);
            } else {
              res.send(true);
            }
          } else {
            console.log("No data available");
            return NaN;
          }
        })
        .catch((error) => {
          console.error(error);
        });
    })();
  }
  //   res.send(JSON.parse(JSON.stringify(user)));
});
async function getDatabaseData(req, res) {}
// data here is the user the same as the frontend
app.get("/signupdata", function(req, res) {
  const dbRef = ref(getDatabase());
  let my_users = [];
  get(child(dbRef, `users`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        my_users = snapshot.val();
        console.log(my_users);
        for (let i = 0; i < my_users.length; i++) {
          if (my_users[i].email == my_logedin_user) {
            res.send(JSON.parse(JSON.stringify(my_users[i])));
          }
        }
      } else {
        console.log("No data available");
        return false;
      }
    })
    .catch((error) => {
      console.error(error);
    });
});
app.listen(8080, function() {
  console.log("Server running");
});

app.post("/logindata", function(req, res) {
  console.log(req.body);
  let email = req.body.email;
  let password = req.body.password;
  const dbRef = ref(getDatabase());
  let my_users = [];

  get(child(dbRef, `users`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        my_users = snapshot.val();
        console.log(my_users);
        let flag = 0;
        for (let i = 0; i < my_users.length; i++) {
          if (my_users[i].email === email) {
            if (my_users[i].password == password) {
              flag = 0;
              console.log(
                "0my pass is" + my_users[i].password + "pass is" + password
              );
              my_logedin_user = email;
            } else {
              flag = 1;
              console.log(
                "1my pass is" + my_users[i].password + "pass is" + password
              );
            }
            break;
          }
        }
        if (flag == 1) {
          res.send(false);
          console.log(false);
        } else {
          res.send(true);
          console.log(true);
        }
      } else {
        console.log("No data available");
        return NaN;
      }
    })
    .catch((error) => {
      console.error(error);
    });
  //   res.send(JSON.parse(JSON.stringify(user)));
});

function writeUserData(userId, user, userPass, res) {
  console.log(user);
  set(ref(db, "users/" + userId), user);
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, user.email, userPass)
    .then((userCredential) => {
      // Signed in
      const use2 = userCredential.user;
      // console.log(use2);
      console.log(use2.uid);
      res.send(true);
      return true;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error);
      res.send(false);

      return false;
    });
  console.log("added");
}
function getDatabaseSize() {
  const dbRef = ref(getDatabase());
  get(child(dbRef, `users`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        var key = Object.keys(snapshot.val());
        console.log(key.length);

        return key.length;
      } else {
        console.log("No data available");
        return NaN;
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

function getKeys() {
  const dbRef = ref(getDatabase());
  get(child(dbRef, `users`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        var key = Object.keys(snapshot.val());
        console.log(key);
        return key;
      } else {
        console.log("No data available");
        return NaN;
      }
    })
    .catch((error) => {
      console.error(error);
    });
}
function getUsers() {
  const dbRef = ref(getDatabase());
  get(child(dbRef, `users`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        return snapshot.val();
      } else {
        console.log("No data available");
        return NaN;
      }
    })
    .catch((error) => {
      console.error(error);
    });
}
function getUser(index) {
  const dbRef = ref(getDatabase());
  get(child(dbRef, `users`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val()[index]);
        return snapshot.val()[index];
      } else {
        console.log("No data available");
        return NaN;
      }
    })
    .catch((error) => {
      console.error(error);
    });
}
