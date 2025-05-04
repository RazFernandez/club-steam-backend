# ☁️ Backend - Club STEAM (Google Cloud Functions + Firebase)

Este repositorio contiene el código fuente y la configuración del **backend** de la aplicación móvil educativa **Club STEAM**, desarrollado con **Node.js** y desplegado en **Google Cloud Functions** mediante **Firebase**.

</br>


## 🎯 Propósito del proyecto

Tras establecer el flujo de trabajo del frontend, se implementó un backend serverless utilizando **Google Cloud Functions**, con el objetivo de conectar la app móvil con una infraestructura escalable, segura y mantenida por Google.

</br>

## 🔧 Tecnologías utilizadas

- ⚙️ **Node.js** como entorno de ejecución.
- 🟨 **JavaScript** como lenguaje de programación.
- 🔥 **Firebase CLI** para la inicialización y despliegue de funciones.
- 🗄️ **Cloud Firestore** como base de datos en tiempo real.
- 🔐 **Firebase Authentication** para manejo de usuarios.
- 🧪 **Firebase Emulator Suite** para pruebas locales antes de despliegue.

</br>

## 🗂️ Estructura del proyecto

La estructura principal del backend es la siguiente:

- `functions/`  
  Carpeta raíz que contiene todas las funciones del backend.

  - `index.js`  
    📌 Punto de entrada para registrar y exportar las Cloud Functions.

  - `firestore/`  
    Carpeta que agrupa las funciones relacionadas con la base de datos Firestore:
  
    - `createUser.js` – ➕ Crea un nuevo usuario en Auth y Firestore.
    - `getUserInfo.js` – 🔍 Obtiene información del usuario actualmente autenticado.
    - `updateUserInfo.js` – 📝 Actualiza los datos generales del usuario.
    - `deleteUserData.js` – ❌ Elimina el usuario tanto de Firebase Auth como de Firestore.
    - `getUsersByType.js` – 📋 Consulta usuarios según su tipo (docente, estudiante, colaboradores o todos a la vez).

  - `package.json`  
    📦 Archivo con las dependencias y scripts del proyecto.

</br>

## ⚙️ Flujo de trabajo

1. 🛠️ Inicialización del entorno backend con Firebase CLI:
   ```bash
   firebase login
   firebase init functions
   ```
2. 🔧 Selección de:

  - Lenguaje: JavaScript

  - Servicios: Firestore, Auth, Emulator Suite

3. 📡 Desarrollo de funciones en la carpeta functions/firestore.

4. 🧪 Pruebas locales con Firebase Emulator Suite.

5. 🚀 Despliegue con:

   ```bash
   firebase deploy --only functions
   ```

</br>

## 🔐 Funcionalidades desarrolladas

- Crear cuentas de usuario con datos personalizados.
- Consultar información del usuario autenticado.
- Editar datos del perfil del usuario.
- Eliminar completamente al usuario (Auth y Firestore).
- Obtener listas de usuarios filtradas por tipo (ej. docentes, estudiantes).

Estas funciones son consumidas directamente desde la app móvil **Club STEAM** para facilitar la gestión y autenticación de los usuarios.

</br>

## 🤝 Contribuir

- Realiza un fork del repositorio.
- Crea una rama nueva (`feature/nueva-funcion`, `fix/bug-eliminacion`).
- Desarrolla y prueba usando Firebase Emulator.
- Haz un commit siguiendo una convención clara.
- Envía un Pull Request describiendo tu cambio.


</br>

## 📎 Recursos del proyecto
- 📄 **Analisís de requisitos**: [link](https://drive.google.com/file/d/1j382WC3epZ4USOsc5QA20-upYzWMVVdc/view?usp=sharing)
- 📖 **Diccionario de datos**: [link](https://drive.google.com/file/d/1eidcLBA368gnoVNHysQjJCLNVcC97BNY/view?usp=sharing)
- 📊 **Diagramas de la aplicación**: [link](https://drive.google.com/drive/folders/1ODu_-UBkVoS_Fy8dgYrN45kIP9eAJCEM?usp=sharing)
- 🎨 **Componentes en Figma para la interfaz de usuario**: [link](https://drive.google.com/drive/folders/1H1uvHyqtBwZrcE9htaDW-c4WdfDBWPz1?usp=sharing)
- 🧩 **Interfaces desarrolladas en Balsamiq (wireframes de baja fidelidad)**: [link](https://drive.google.com/drive/folders/1Ds8j4xuGCCi5BN2bcHivMM5WK2CrvPpV?usp=sharing)
- 🖼️ **Interfaces desarrolladas en Figma (diseño visual final)**: [link](https://drive.google.com/drive/folders/1Cj01WSLmdL2szF1F1a6LW9sDPvfTeM3F?usp=sharing)
- 🔄 **Prototipo interactivo en Figma**: [link](https://www.figma.com/proto/jCwmiHyeVkdLlvOZtxhu9X/Club-Steam?node-id=33-3872&t=CkpAVjORqycpr3kP-1&starting-point-node-id=33%3A3872)
- 📱 **APK de la aplicación para pruebas**: [link](https://drive.google.com/drive/folders/1V_q7_l3E-voORXtVQDVyLvzuySwarEp7?usp=sharing)
- 🗄️ **Repositorio del proyecto de backend**: [link](https://github.com/RazFernandez/club-steam-backend)

---

**Club STEAM** - Proyecto de innovación educativa

_Desarrollado bajo la metodología de residencias profesionales y pora la obtencion del titulo en Ingenieria En Sistemas Computacionales._

_Código Desarrollado por Miguel Raziel Jesús Fernández Pascual_


