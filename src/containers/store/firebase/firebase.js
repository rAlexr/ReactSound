import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
  DocumentSnapshot,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBfF6eNQH9OrIa8KVH1d5iGK5jZpd5xn7g",
  authDomain: "react-sound-db.firebaseapp.com",
  projectId: "react-sound-db",
  storageBucket: "react-sound-db.appspot.com",
  messagingSenderId: "675766347573",
  appId: "1:675766347573:web:5ee331c012a107fab70e7c",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

//Google config
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

//DB
export const dataBase = getFirestore();

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = collection(dataBase, collectionKey);
  const batch = writeBatch(dataBase);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.slug.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
};

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(dataBase, "users", userAuth.uid);
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
      console.log("error crating the user", error.message);
    }
  }
  return userDocRef;
};


export const getCategorysAndDocuments = async () => {
  const collectionRef = collection(dataBase, 'categories');
  const qu = query(collectionRef);

  const querySnapshot = await getDocs(qu);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnaphot) => {
    const { slug } = docSnaphot.data();
    acc[ slug ] = docSnaphot.data(); 

    return acc;
  }, {})
  
  return categoryMap;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangeListener = (callBack) =>
  onAuthStateChanged(auth, callBack);
