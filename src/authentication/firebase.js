import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCD-N2tI_MvjBflA2X3bpmmTCjHGlASa0g",
  authDomain: "project-dts-2aba0.firebaseapp.com",
  projectId: "project-dts-2aba0",
  storageBucket: "project-dts-2aba0.appspot.com",
  messagingSenderId: "716676612699",
  appId: "1:716676612699:web:47dbbfdaba6c1d6382b57e",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const registerWithEmailAndPassword = async (email, password) => {
  try {
    const response = await createUserWithEmailAndPassword(auth, email, password);
    console.log("User register", response.user);
  } catch (err) {
    console.log(err);
    console.log("error code auth", err.code);
    console.log("error message auth", err.message);
  }
};

const loginWithEmailAndPassword = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("User login", userCredential.user);
  } catch (err) {
    console.log(err);
    console.log("error code auth", err.code);
    console.log("error message auth", err.message);
  }
};

const resetPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    console.log("Password reset has been sent");
  } catch (err) {
    console.log(err);
  }
};

const logoutFromApps = async () => {
  try {
    await signOut(auth);
  } catch (err) {
    console.log(err);
  }
};

export { auth, registerWithEmailAndPassword, loginWithEmailAndPassword, resetPassword, logoutFromApps };
