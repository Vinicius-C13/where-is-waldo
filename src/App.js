import { initializeApp } from 'firebase/app';
/*import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import {
  getFirestore,
  collection,
  addDoc,
  query,
  orderBy,
  limit,
  onSnapshot,
  setDoc,
  updateDoc,
  doc,
  serverTimestamp,
} from 'firebase/firestore';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';

import { useCollectionData } from 'react-firebase-hooks/firestore';*/

import RouteSwitch from './RouteSwitch';
import './style.css'


initializeApp({
  apiKey: "AIzaSyCaf772nR5SYDKp_G5gEva7tsPshFEvpHI",
  authDomain: "where-is-waldo-9fdb8.firebaseapp.com",
  projectId: "where-is-waldo-9fdb8",
  storageBucket: "where-is-waldo-9fdb8.appspot.com",
  messagingSenderId: "890404723141",
  appId: "1:890404723141:web:03397722cc2c023b70d3ac"
})

function App() {

  return (
    <RouteSwitch />
  );
}

export default App;
