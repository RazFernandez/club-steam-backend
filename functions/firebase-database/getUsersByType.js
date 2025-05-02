const { onRequest } = require("firebase-functions/v2/https");
const { getFirestore } = require("firebase-admin/firestore");
const { app } = require("./firebaseConfig");

const getUsersByType = onRequest(async (req, res) => {
  const db = getFirestore(app, "firestore-clubsteam-db");
  const filter = req.query.filter;

  // Accepted filter values
  const validFilters = ["all", "Docente", "Estudiante", "Colaborador"];

  if (!filter || !validFilters.includes(filter)) {
    return res.status(400).json({
      error:
        "Invalid or missing filter parameter. Use: all, Docente, Estudiante, Colaborador",
    });
  }

  try {
    let usersQuery = db.collection("Users");

    if (filter !== "all") {
      usersQuery = usersQuery.where("tipoUsuario", "==", filter);
    }

    const snapshot = await usersQuery.get();
    const users = [];

    snapshot.forEach((doc) => {
      const data = doc.data();
      users.push({
        nombres: data.nombres?.trim() || "",
        apellidoPaterno: data.apellidoPaterno?.trim() || "",
        apellidoMaterno: data.apellidoMaterno?.trim() || "",
        correoElectronico: data.correoElectronico?.trim().toLowerCase() || "",
        tipoUsuario: data.tipoUsuario?.trim() || "",
      });
    });

    res.status(200).json({ users });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = { getUsersByType };
