const { onRequest } = require("firebase-functions/v2/https");
const { initializeApp } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");

// Start the firebase SDK
initializeApp();

// Function to add a user on firestore
exports.addUser = onRequest(async (req, res) => {
  const db = getFirestore();

  try {
    const newUser = {
      name: "Angel",
      createdAt: new Date(),
    };

    // Create the user in the database
    const docRef = await db.collection("Users").add(newUser);

    // Message to indicate the creation of the user was sucessful.
    res.status(200).json({ message: `User added with ID: ${docRef.id}` });

  } catch (error) {
    // Message to indicate the creation of the user failed.
    console.error("Error adding user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
