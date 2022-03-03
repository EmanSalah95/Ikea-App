import { initializeApp } from 'firebase/app'
import {getFirestore} from 'firebase/firestore';
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: 'AIzaSyBvz1el-WaDgUU36xlWeIEj2G9iyI0ewW4',
  authDomain: 'ikea-8dc72.firebaseapp.com',
  projectId: 'ikea-8dc72',
  storageBucket: 'ikea-8dc72.appspot.com',
  messagingSenderId: '293717792182',
  appId: '1:293717792182:web:f170e2edfe2370c9769d17',
};

//test

// const firebaseConfig = {
//   apiKey: "AIzaSyDPXka0wfchj1QecSLRkaIWY3sE1vjV6OY",
//   authDomain: "ikea-test-f2270.firebaseapp.com",
//   projectId: "ikea-test-f2270",
//   storageBucket: "ikea-test-f2270.appspot.com",
//   messagingSenderId: "38030959738",
//   appId: "1:38030959738:web:9b7cb5c03cd58765b787c3"
// };

export const app = initializeApp(firebaseConfig);

export  const fireStore = getFirestore(app);  

export const auth = getAuth(app);
