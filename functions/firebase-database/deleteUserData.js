const { onRequest } = require("firebase-functions/v2/https");
const { getFirestore } = require("firebase-admin/firestore");
const { getAuth } = require("firebase-admin/auth");
const { app } = require("./firebaseConfig");

const deleteUserData = onRequest(async (req, res) => {
  const uid = req.query.uid;

  const db = getFirestore(app, "firestore-clubsteam-db");
  const auth = getAuth(app);

  if (!uid) {
    return res.status(400).json({ error: "Missing UID parameter" });
  }

  try {
    const userDocRef = db.collection("Users").doc(uid);
    const userDoc = await userDocRef.get();

    if (!userDoc.exists) {
      return res.status(404).json({ error: "User not found" });
    }

    // Delete the user document in Firestore
    await userDocRef.delete();

    // Delete the user in Firebase Authentication
    await auth.deleteUser(uid);

    res
      .status(200)
      .json({
        message: "User successfully deleted from database and authentication",
      });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = { deleteUserData };
