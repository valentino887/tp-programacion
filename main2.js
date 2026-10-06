import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-database.js";

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
const rt = ref(db, "CARTA");

let cartaM = document.getElementById("carta");
let datos;

onValue(rt, (snapshot) => {
if (snapshot.exists()) {
snapshot.forEach((elemento) => {
datos = elemento.val();
cartaM.innerHTML += `
<div class="plato">
<h3>${datos.nombre}</h3>
<p class="contenido">${datos.contenido}</p>
<p class="precio">$${datos.precio}</p>
</div>`;
});
}
});
