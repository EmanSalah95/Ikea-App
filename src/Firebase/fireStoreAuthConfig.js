import { useEffect, useState } from "react";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBvz1el-WaDgUU36xlWeIEj2G9iyI0ewW4',
  authDomain: 'ikea-8dc72.firebaseapp.com',
  projectId: 'ikea-8dc72',
  storageBucket: 'ikea-8dc72.appspot.com',
  messagingSenderId: '293717792182',
  appId: '1:293717792182:web:f170e2edfe2370c9769d17',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();

export function signup(email, password) {
  // addDoc(collection(firestore,'users'),data))
  return createUserWithEmailAndPassword(auth, email, password);
  // console.log(email);
  // console.log(password);
}

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password)
    
  // console.log(email);
  // console.log(password);
}

export function logout() {
  return signOut(auth);
}

// Custom Hook
export function useAuth() {
  const [ currentUser, setCurrentUser ] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
    return unsub;
  }, [])

  return currentUser;
}

