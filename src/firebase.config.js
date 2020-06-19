import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyChRUZQ5o4yRa1LznUuuKAbuFxGPZUB2hs",
  authDomain: "hair-code.firebaseapp.com",
  databaseURL: "https://hair-code.firebaseio.com",
  projectId: "hair-code",
  storageBucket: "hair-code.appspot.com",
  messagingSenderId: "840785269395",
  appId: "1:840785269395:web:aad5f68d2227a27e2e3366",
  measurementId: "G-34Y1EZ0GF1"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({
  cacheSizeBytes: firebase.firestore.CACHE_SIZE_UNLIMITED
});
firebase
  .firestore()
  .enablePersistence({ synchronizeTabs: true })
  .then(() => {
    // console.log("Multi Tab Persistance");
  })
  .catch(error => {
    if (error.code == "failed-precondition") {
      // console.log(
      //   "Multiple tabs open, persistence can only be enabled in one tab at a a time."
      // );
    } else if (error.code == "unimplemented") {
      // console.log(
      //   "The current browser does not support all of the features required to enable persistence"
      // );
    }
  });

// firebase utils
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
const storageRef = storage.ref();
const functions = firebase.functions();
const currentUser = auth.currentUser;

// firebase collections
const app = db.collection("app");
const users = db.collection("users");

export {
  firebase,
  auth,
  db,
  storage,
  storageRef,
  functions,
  currentUser,
  app,
  users
};
