import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC5Oe5MTur9DqWU5yPKSFpV05HTavP528Y",
  authDomain: "finrecovery-ai.firebaseapp.com",
  projectId: "finrecovery-ai",
  storageBucket: "finrecovery-ai.firebasestorage.app",
  messagingSenderId: "238991539194",
  appId: "1:238991539194:web:e21fc86da557897a838243"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);