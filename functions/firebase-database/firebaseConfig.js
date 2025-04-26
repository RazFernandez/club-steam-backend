// firebase-database/firebaseConfig.js

const admin = require("firebase-admin");

let app;

if (!admin.apps.length) {
  app = admin.initializeApp(); // Initialize only if not already initialized
} else {
  app = admin.app(); // Use the existing initialized app
}

module.exports = { admin, app };
