import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } 
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const auth = getAuth();

// LOGIN
window.login = async () => {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  await signInWithEmailAndPassword(auth, email, pass);
};

// REDIRECCIÓN SEGÚN ROL
onAuthStateChanged(auth, async (user) => {
  if (user) {
    const ref = doc(db, "usuarios", user.uid);
    const snap = await getDoc(ref);
    const rol = snap.data().rol;

    if (rol === "admin") {
      window.location = "admin.html";
    } else {
      window.location = "dashboard.html";
    }
  }
});
