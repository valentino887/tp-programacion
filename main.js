import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBMO6k7PmejjuBej8WoOcjbdpdeU9hgeNM",
  authDomain: "tp-programacion-ffe61.firebaseapp.com",
  databaseURL: "https://tp-programacion-ffe61-default-rtdb.firebaseio.com",
  projectId: "tp-programacion-ffe61",
  storageBucket: "tp-programacion-ffe61.firebasestorage.app",
  messagingSenderId: "390130100696",
  appId: "1:390130100696:web:cc1118b4e917a81e97eaad"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

let name = document.getElementById("name");
let subir = document.getElementById("B+");
let cont = document.getElementById("cont");
let precio = document.getElementById("precio");

subir.onclick = function() {

    console.log("Botón apretado");
    console.log("Valor:", name.value);

    let Platoref = ref(db, "CARTA/" + name.value);

    set(Platoref, {
        nombre: name.value,
        contenido: cont.value,
        precio: precio.value
    })
    .then(() => {
        console.log("DATOS GUARDADOS CORRECTAMENTE");
    })
    .catch((error) => {
        console.error("ERROR DE FIREBASE:", error);
    });
};