onAuthStateChanged(auth, async (user) => {
  if (user) {
    console.log("Usuario logueado:", user.uid);

    const ref = doc(db, "usuarios", user.uid);
    const snap = await getDoc(ref);

    if (!snap.exists()) {
      alert("No tienes rol asignado");
      console.error("No existe documento en colección usuarios");
      return;
    }

    const rol = snap.data().rol;
    console.log("Rol:", rol);

    if (rol === "admin") {
      window.location.href = "admin.html";
    } else {
      window.location.href = "dashboard.html";
    }
  }
});
