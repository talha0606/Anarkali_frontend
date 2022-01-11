import firebase from "firebase/compat/app";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCO2YdPBRRRxSOSbXlQyDSIbooPB1JpC2E",
  authDomain: "online-market-place-7029f.firebaseapp.com",
  projectId: "online-market-place-7029f",
  storageBucket: "online-market-place-7029f.appspot.com",
  messagingSenderId: "723987703568",
  appId: "1:723987703568:web:dc6df207d0faa3772d6795",
  measurementId: "G-SG1FBMSVE3",
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
