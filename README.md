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

