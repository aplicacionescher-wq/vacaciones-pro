import { db } from "./firebase.js";
import { collection, onSnapshot, updateDoc, doc } 
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const cont = document.getElementById("panel");

onSnapshot(collection(db, "solicitudes"), (snap) => {
  cont.innerHTML = "";

  snap.forEach(d => {
    const data = d.data();

    cont.innerHTML += `
      <div class="card">
        <b>${data.inicio} - ${data.fin}</b>
        (${data.dias} días)

        <p>${data.estado}</p>

        <button onclick="cambiar('${d.id}','Autorizada')">✅</button>
        <button onclick="cambiar('${d.id}','Cancelada')">❌</button>
      </div>
    `;
  });
});

window.cambiar = async (id, estado) => {
  await updateDoc(doc(db, "solicitudes", id), { estado });
};
