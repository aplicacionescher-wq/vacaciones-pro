import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAafvZW2j7K8ulc1nVmSH_oYyhxc6c-JCY",
  authDomain: "vacaciones-empresa-95a80.firebaseapp.com",
  projectId: "vacaciones-empresa-95a80",
  storageBucket: "vacaciones-empresa-95a80.firebasestorage.app",
  messagingSenderId: "682839620502",
  appId: "1:682839620502:web:2643483ef414eba710fbb7"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
