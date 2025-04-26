const { onRequest } = require("firebase-functions/v2/https");
const { getFirestore } = require("firebase-admin/firestore");
const { app } = require("./firebaseConfig");

// Initialize Firebase Admin SDK


const getUserInfo = onRequest(async (req, res) => {
  const uid = req.query.uid;
    
  // Instance of the firestore database
  const db = getFirestore(app, "firestore-clubsteam-db");

  //Extract UID from the Request
  if (!uid) {
    return res.status(400).json({ error: "Missing UID parameter" });
  }

  try {
    // obstains the reference to the document in firestore
    const userDoc = await db.collection("Users").doc(uid).get();
    if (!userDoc.exists) {
      return res.status(404).json({ error: "User not found" });
    }
    // Retrives all the data in the document
    const data = userDoc.data();

    // Only retrieves the data we want
    const userData = {
    //   nombreCompleto: `${data.nombres}${data.apellidoPaterno || ""}${
    //     data.apellidoMaterno || ""
        //   }`.trim(),
      nombres: data.nombres,
      apellidoPaterno: data.apellidoPaterno,
      apellidoMaterno: data.apellidoMaterno,
      correoElectronico: data.correoElectronico,
      tipoUsuario: data.tipoUsuario,
      numeroCelular: data.numeroCelular,
      proyectos: data.proyectos,
      fotoPerfil: data. fotoPerfil,
    };

    // Extract the fields needed, depending on the user type
    if (data.tipoUsuario === "Docente") {
      userData.ingenieria = data.ingenieria;
    } else if (data.tipoUsuario === "Estudiante") {
      userData.ingenieria = data.ingenieria;
      userData.numeroControl = data.numeroControl;
    } else if (data.tipoUsuario === "Colaborador") {
      userData.unidadAdministrativa = data.unidadAdministrativa;
    }

    res.status(200).json(userData);
  } catch (error) {
      console.error("Error retrieving user:", error);
      res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = { getUserInfo };