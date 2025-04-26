// Description: This file initializes the Firebase Admin SDK and exports functions for use in Firebase Cloud Functions.
const { createUser } = require('./firebase-database/createUser')
const { getUserInfo } = require('./firebase-database/getUserInfo')
const { deleteUserData } = require('./firebase-database/deleteUserData')
//const { createUserInFirestore } = require("./firebase-database/onUserCreated");

//initializeApp();

exports.createUser = createUser;
exports.getUserInfo = getUserInfo;
exports.deleteUserData = deleteUserData;
//exports.createUserInFirestore = createUserInFirestore;