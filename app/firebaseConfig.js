import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA2HPXeE2X6NQ6k6IbaEfbiYlZgN0Cf8nI",
  authDomain: "palmcare-6decb.firebaseapp.com",
  projectId: "palmcare-6decb",
  storageBucket: "palmcare-6decb.firebasestorage.app",
  messagingSenderId: "175524047048",
  appId: "1:175524047048:web:2b3aeafba2cc9ffe2cddfd",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider };
