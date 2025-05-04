const { onRequest } = require("firebase-functions/v2/https");
const { getFirestore } = require("firebase-admin/firestore");
const { app } = require("./firebaseConfig");

const getUserInfo = onRequest(async (req, res) => {
  const uid = req.query.uid;

  const db = getFirestore(app, "firestore-clubsteam-db");

  if (!uid) {
    return res.status(400).json({ error: "Missing UID parameter" });
  }

  try {
    const userDoc = await db.collection("Users").doc(uid).get();
    if (!userDoc.exists) {
      return res.status(404).json({ error: "User not found" });
    }

    const data = userDoc.data();

    const userData = {
      nombres: data.nombres?.trim() || "",
      apellidoPaterno: data.apellidoPaterno?.trim() || "",
      apellidoMaterno: data.apellidoMaterno?.trim() || "",
      correoElectronico: data.correoElectronico?.trim() || "",
      tipoUsuario: data.tipoUsuario?.trim() || "",
      numeroCelular: data.numeroCelular?.trim() || "",
      proyectos: data.proyectos || [],
      fotoPerfil: data.fotoPerfil?.trim() || "",
    };

    if (userData.tipoUsuario === "Docente") {
      userData.ingenieria = data.ingenieria?.trim() || "";
    } else if (userData.tipoUsuario === "Estudiante") {
      userData.ingenieria = data.ingenieria?.trim() || "";
      userData.numeroControl = data.numeroControl?.trim() || "";
    } else if (userData.tipoUsuario === "Colaborador") {
      userData.unidadAdministrativa = data.unidadAdministrativa?.trim() || "";
    }

    res.status(200).json(userData);
  } catch (error) {
    console.error("Error retrieving user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = { getUserInfo };
