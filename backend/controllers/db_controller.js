const { ref, set, get, child } = require("firebase/database");
const { dbRef, db } = require("../utils/utils");
const { UserDb } = require("../models/user");
const auth_controller = require("../controllers/auth_controller");

exports.signup = async (req, res) => {
  console.log(req.body);
  if (req.body.type === "caretaker") {
    await userSignup(req, res);
  } else {
    await patientSignupValidate(req, res);
  }
};
exports.login = async (req, res) => {
  await auth_controller.login(req, res);
};
async function patientSignupValidate(req, res) {
  const users = await getDatabaseUsers();
  const val = isUserInDb(users, req.body.email);
  if (!val) {
    res.send(true);
  } else {
    res.send(false);
  }
}
async function userSignup(req, res) {
  const users = await getDatabaseUsers();
  const val = isUserInDb(users, req.body.email);
  if (!val) {
    let my_user = new UserDb(
      req.body.name,
      req.body.email,
      req.body.phone,
      req.body.type,
      typeof req.body.list === "undefined" ? [] : req.body.list,
      typeof req.body.questions === "undefined" ? [] : req.body.questions,
      typeof req.body.medicalHistory === "undefined"
        ? ""
        : req.body.medicalHistory
    );
    await writeUserData(users.length, my_user, req.body.password, res);
  } else {
    res.send(false);
  }
}
async function getDatabaseUsers() {
  let my_users = [];
  await get(child(dbRef, `users`))
    .then(async (snapshot) => {
      if (snapshot.exists()) {
        console.log("database accessed");
        my_users = snapshot.val();
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error("error is:\n" + error);
    });
  return my_users;
}
function isUserInDb(users, email) {
  let flag = 0;

  for (let i = 0; i < users.length; i++) {
    if (users[i]._email === email) flag = 1;
  }
  if (flag == 1) {
    console.log("true");

    return true;
  } else {
    console.log("false");
    return false;
  }
}
async function writeUserData(userId, user, password, res) {
  console.log("writing users data");
  console.log(user);

  let val = await auth_controller.addUserToFbAuth(res, user.email, password);
  if (!val) {
    console.log("not added");
  } else {
    await set(ref(db, "users/" + userId), user);
    console.log("added");
  }
}
exports.getDatabaseUser = async (req, res) => {
  const users = await getDatabaseUsers();
  let index = -1;
  console.log("required email to find is: " + req.body.email);
  console.log("database length is " + users.length);
  for (let i = 0; i < users.length; i++) {
    if (users[i]._email === req.body.email) index = i;
  }
  if (index >= 0) {
    console.log("found user in database and returning it");
    res.send(users[index]);
  } else {
    console.log("didn't find user in database and returning false");
    return false;
  }
};
