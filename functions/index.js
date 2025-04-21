// Description: This file initializes the Firebase Admin SDK and exports functions for use in Firebase Cloud Functions.

const { initializeApp } = require("firebase-admin/app");
const { addUser } = require("./firebase-database/addUser");
const { createUser } = require('./firebase-database/createUser')
//const { createUserInFirestore } = require("./firebase-database/onUserCreated");

//initializeApp();

exports.addUser = addUser;
exports.createUser = createUser;
//exports.createUserInFirestore = createUserInFirestore;