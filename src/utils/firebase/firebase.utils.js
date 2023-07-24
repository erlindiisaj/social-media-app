// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import {
  getDoc,
  setDoc,
  doc,
  getFirestore,
  getDocs,
  query,
  addDoc,
  writeBatch,
  collection,
} from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  listAll,
} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_ot5Cqj4JsBxOoM1KyI0oExRUNPolWw4",
  authDomain: "social-app-f5bee.firebaseapp.com",
  projectId: "social-app-f5bee",
  storageBucket: "social-app-f5bee.appspot.com",
  messagingSenderId: "1086707247806",
  appId: "1:1086707247806:web:00cb29760c258989634cef",
  measurementId: "G-QCM3ZXBZQL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

//!~~~~~~~~~~~~~~~~~~~~~~~~~ Post Functions ~~~~~~~~~~~~~~~~~~~~~~~~~!//

export const uploadPost = async (uid, objectToAdd, file) => {
  const storageRef = ref(storage, `/files/${uid}/${file.name}`);
  const uploadedImage = await uploadBytesResumable(storageRef, file);
  const path = uploadedImage.ref._location.path;
  const imageRef = ref(storage, path);
  const collectionRef = collection(db, `users/${uid}/posts`);
  getDownloadURL(imageRef).then((url) => {
    addDoc(collectionRef, {
      ...objectToAdd,
      imageUrl: url,
    });
  });
};

export const getUserData = async (userAuth) => {
  const { uid } = userAuth;
  const result = [];
  const querySnapshot = await getDocs(collection(db, `users/${uid}/posts`));
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    result.push(doc.data());
  });
  return result;
};

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;
};

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const signUpWithEmailAndPassword = async (user) => {
  const { email, password } = user;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const logInWithEmailAndPassword = async (user) => {
  const { email, password } = user;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);

export const userSignOut = async () => await signOut(auth);
