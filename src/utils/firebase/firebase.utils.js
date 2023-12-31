// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import Avatars from "../../datas/avatars";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  updateProfile,
  deleteUser,
  updateEmail,
} from "firebase/auth";
import {
  getDoc,
  setDoc,
  doc,
  getFirestore,
  getDocs,
  addDoc,
  collection,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
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

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

function randomNumberInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//!~~~~~~~~~~~~~~~~~~~~~~~~~ Upload Post Function ~~~~~~~~~~~~~~~~~~~~~~~~~!//
export const uploadPost = async (user, objectToAdd, file) => {
  const { uid, displayName, photoURL } = user;
  const date = new Date();
  const storageRef = ref(storage, `/files/${uid}/${file.name}`);
  const uploadedImage = await uploadBytesResumable(storageRef, file);
  const path = uploadedImage.ref._location.path;
  const imageRef = ref(storage, path);
  const collectionRef = collection(db, "/posts");
  getDownloadURL(imageRef).then((url) => {
    addDoc(collectionRef, {
      ...objectToAdd,
      id: uid,
      imageUrl: url,
      avatarURL: photoURL,
      userName: displayName,
      dateCreated: date.toString(),
    });
  });
};

export const deletePost = async (uid, id) => {
  const userPostDocRef = doc(db, `users/${uid}/posts`, id);
  const postDocRef = doc(db, `/posts`, id);
  await deleteDoc(userPostDocRef);
  await deleteDoc(postDocRef);
};

export const getPosts = async () => {
  const result = [];
  const querySnapshot = await getDocs(collection(db, `/posts`));
  querySnapshot.forEach((doc) => {
    result.push({ id: doc.id, data: doc.data() });
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
    const { email } = userAuth;
    const createdAt = new Date();
    let rand = randomNumberInRange(0, 7);
    try {
      updateProfile(userAuth, {
        photoURL: Avatars[rand],
        displayName: "User ID",
      });
    } catch (err) {
      console.log(err);
    }
    try {
      await setDoc(userDocRef, {
        displayName: "User Id",
        photoURL: Avatars[rand],
        email,
        createdAt,
        followers: "0",
        posts: "0",
        likes: "0",
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;
};

export const changeUsersDisplayName = async (userAuth, name) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  await updateDoc(userDocRef, {
    displayName: name,
  });
  return await updateProfile(userAuth, {
    displayName: name,
  });
};
export const changeUsersEmail = async (userAuth, email) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  await updateDoc(userDocRef, {
    email: email,
  });
  return await updateEmail(userAuth, email);
};

export const deleteAccount = async (userAuth) => {
  const user = auth.currentUser;
  const userDocRef = doc(db, "users", userAuth.uid);
  await deleteDoc(userDocRef);
  return await deleteUser(user);
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
