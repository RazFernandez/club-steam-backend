// Description: This file initializes the Firebase Admin SDK and exports functions for use in Firebase Cloud Functions.
const { addUser } = require("./firebase-database/addUser");
const { createUser } = require('./firebase-database/createUser')
const { getUserInfo } = require('./firebase-database/getUserInfo')
//const { createUserInFirestore } = require("./firebase-database/onUserCreated");

//initializeApp();

exports.addUser = addUser;
exports.createUser = createUser;
exports.getUserInfo = getUserInfo;
//exports.createUserInFirestore = createUserInFirestore;