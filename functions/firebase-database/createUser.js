const { onRequest } = require("firebase-functions/v2/https");
const { getFirestore } = require("firebase-admin/firestore");
const { app } = require("./firebaseConfig");


// Initialize Firebase Admin SDK
const createUser = onRequest(async (req, res) => {
  const db = getFirestore(app, "firestore-clubsteam-db");

  try {
    const {
      uid,
      nombres,
      apellidoPaterno,
      apellidoMaterno,
      correoElectronico,
      numeroCelular,
      tipoUsuario,
      fotoPerfil,
      proyectos,
      ingenieria,
      unidadAdministrativa,
      numeroControl,
    } = req.body;

    if (!uid || !tipoUsuario || !correoElectronico) {
      return res.status(400).json({
        error:
          "Missing required fields: uid, tipoUsuario, or correoElectronico.",
      });
    }

    // Create the user object
    const newUser = {
      uid: uid.trim(),
      nombres: nombres?.trim(),
      apellidoPaterno: apellidoPaterno?.trim(),
      apellidoMaterno: apellidoMaterno?.trim(),
      correoElectronico: correoElectronico?.trim().toLowerCase(),
      numeroCelular: numeroCelular?.trim(),
      tipoUsuario: tipoUsuario?.trim(),
      fotoPerfil: fotoPerfil?.trim() || "",
      proyectos: proyectos || [],
    };

    // Add additional fields based on user type
    if (tipoUsuario === "Docente") {
      newUser.ingenieria = ingenieria?.trim();
    } else if (tipoUsuario === "Estudiante") {
      newUser.ingenieria = ingenieria?.trim();
      newUser.numeroControl = numeroControl?.trim();
    } else if (tipoUsuario === "Colaborador") {
      newUser.unidadAdministrativa = unidadAdministrativa?.trim();
    }

    // Save user document using UID as the document ID
    await db.collection("Users").doc(uid).set(newUser);

    res
      .status(200)
      .json({ message: `User with UID ${uid} added successfully.` });
  } catch (error) {
    console.error("Error adding user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = { createUser };
