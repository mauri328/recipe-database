// -- Firebase init: auth + firestore (with offline persistence) --

import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  initializeFirestore,
  persistentLocalCache,
  persistentMultipleTabManager,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDX2KHfHmq2rzHpYYgV_iHB379W3HFUm0o",
  authDomain: "recipedb-5f3c3.firebaseapp.com",
  projectId: "recipedb-5f3c3",
  storageBucket: "recipedb-5f3c3.appspot.com",
  messagingSenderId: "582188548247",
  appId: "1:582188548247:web:6a3ca77e6bf6f2c2dca9d2",
  measurementId: "G-ZMHZB2MYKG",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

// Offline-first: local cache is primary, synced to Firestore when online.
// persistentMultipleTabManager lets multiple open tabs share the same cache.
export const firestore = initializeFirestore(app, {
  localCache: persistentLocalCache({
    tabManager: persistentMultipleTabManager(),
  }),
});

export function loginWithGoogle() {
  return signInWithPopup(auth, provider);
}

export function logout() {
  return signOut(auth);
}

export function watchAuthState(callback) {
  return onAuthStateChanged(auth, callback);
}
