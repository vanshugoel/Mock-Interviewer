import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTjPKkKhVrR6UNLbDO7MCE8mp9lNHfR3Q",
  authDomain: "prepwise-cccfe.firebaseapp.com",
  projectId: "prepwise-cccfe",
  storageBucket: "prepwise-cccfe.firebasestorage.app",
  messagingSenderId: "631658690681",
  appId: "1:631658690681:web:a19044711f417bbf57bca8",
  measurementId: "G-ENRYWWZM0S"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
