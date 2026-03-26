import { db } from "./firebase.js";
import { collection, addDoc, query, where, onSnapshot } 
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const uid = auth.currentUser.uid;

// 📌 Solicitar
window.solicitar = async () => {
  const inicio = document.getElementById("inicio").value;
  const fin = document.getElementById("fin").value;
  const periodo = document.getElementById("periodo").value;

  const dias = (new Date(fin) - new Date(inicio)) / 86400000 + 1;

  if (dias > 10) return alert("Máximo 10 días");

  await addDoc(collection(db, "solicitudes"), {
    uid,
    inicio,
    fin,
    dias,
    periodo,
    estado: "Pendiente",
    fecha: new Date()
  });
};

// 📊 Ver MIS solicitudes
const q = query(collection(db, "solicitudes"), where("uid", "==", uid));

onSnapshot(q, (snap) => {
  const cont = document.getElementById("misSolicitudes");
  cont.innerHTML = "";

  snap.forEach(doc => {
    const d = doc.data();
    cont.innerHTML += `
      <div class="card">
        ${d.inicio} a ${d.fin} (${d.dias} días)
        <span class="estado ${d.estado}">${d.estado}</span>
      </div>
    `;
  });
});
