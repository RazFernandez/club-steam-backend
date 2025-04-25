// functions/firebase-database/addUser.js
const { onRequest } = require("firebase-functions/v2/https");
const { getFirestore } = require("firebase-admin/firestore");

// Function to add a user on firestore
const addUser = onRequest(async (req, res) => {
  const db = getFirestore();

  try {
    const newUser = {
      name: "Angel",
      createdAt: new Date(),
    };

    const docRef = await db.collection("Users").doc(uid).create(newUser);;

    res.status(200).json({ message: `User added with ID: ${docRef.id}` });

  } catch (error) {
    console.error("Error adding user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = {
  addUser,
};