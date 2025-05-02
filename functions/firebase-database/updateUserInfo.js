const { onRequest } = require("firebase-functions/v2/https");
const { getFirestore } = require("firebase-admin/firestore");
const { app } = require("./firebaseConfig");

const updateUserInfo = onRequest(async (req, res) => {
  const db = getFirestore(app, "firestore-clubsteam-db");

  const { uid, nombres, apellidoPaterno, apellidoMaterno, numeroCelular } =
    req.body;

  if (!uid) {
    return res.status(400).json({ error: "Missing UID in request body" });
  }

  try {
    const userRef = db.collection("Users").doc(uid);
    const userDoc = await userRef.get();

    if (!userDoc.exists) {
      return res.status(404).json({ error: "User not found" });
    }

    const updates = {};

    if (nombres !== undefined) updates.nombres = nombres.trim();
    if (apellidoPaterno !== undefined)
      updates.apellidoPaterno = apellidoPaterno.trim();
    if (apellidoMaterno !== undefined)
      updates.apellidoMaterno = apellidoMaterno.trim();
    if (numeroCelular !== undefined)
      updates.numeroCelular = numeroCelular.trim();

    await userRef.update(updates);

    res
      .status(200)
      .json({ message: `User with UID ${uid} updated successfully.` });
  } catch (error) {
    console.error("Error updating user info:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = { updateUserInfo };
