const { onRequest } = require("firebase-functions/v2/https");
const { getFirestore } = require("firebase-admin/firestore");

const createUser = onRequest(async (req, res) => {
  const db = getFirestore();

  try {
    // Accept data from the request body
    const { email, password } = req.body;

    // If any data is missing, then return an error request message
    if (!email || !password) {
      return res
        .status(400)
        .json({ error: "Email and password are required." });
    }

    // Object that saves the data to create a new user in the database
    const newUser = {
      email,
      password,
      createdAt: new Date(),
    };

    // Creation of the user in firestore
    const docRef = await db.collection("Users").add(newUser);
    res.status(200).json({ message: `User added with ID: ${docRef.id}` });
  } catch (error) {
    console.error("Error adding user: ", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = { createUser };