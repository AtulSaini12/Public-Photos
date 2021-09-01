import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";
// import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyDyr6DMIgXFwAXOh8BF8R1tpAgr_Nlau38",
  authDomain: "firegallery-c0349.firebaseapp.com",
  projectId: "firegallery-c0349",
  storageBucket: "firegallery-c0349.appspot.com",
  messagingSenderId: "1060475671093",
  appId: "1:1060475671093:web:7781f3c60475172c81577c",
};

const app = firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
// const projectFirestore = getFirestore(app);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
