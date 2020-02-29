// Initialize Firebase
const firebase = require("firebase/app");

const db = url => {
  if (true) {
    try {
      let config = {
        apiKey: "AIzaSyAopDP1FV9V8_1hZJ79VaODbX1dG_Q8Uj0",
        authDomain: "test-1642b.firebaseapp.com",
        databaseURL: "https://test-1642b.firebaseio.com",
        projectId: "test-1642b",
        storageBucket: "test-1642b.appspot.com",
        messagingSenderId: "411560728062",
        appId: "1:411560728062:web:5e50e0f350ff6d6ba71caf",
        measurementId: "G-209SL431ZW"
      };
      firebase.initializeApp(config);
    } catch (err) {
      // we skip the "already exists" message which is
      // not an actual error when we're hot-reloading
      if (!/already exists/.test(err.message)) {
        console.error("Firebase initialization error", err.stack);
      }
    }
    return firebase;
  } else if (url == "us-central1-wl-test-1.cloudfunctions.net") {
    try {
      let config = {
        apiKey: process.env.FIREBASE_API_KEY_1,
        authDomain: process.env.FIREBASE_AUTH_DOMAIN_1,
        databaseURL: process.env.FIREBASE_DATABASE_URL_1,
        projectId: process.env.FIREBASE_PROJECT_ID_1,
        storageBucket: process.env.FIREBASE_STORAGE_BUCKET_1,
        messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID_1,
        appId: process.env.FIREBASE_APP_ID_1,
        measurementId: process.env.FIREBASE_MEASUREMENT_ID_1
      };
      firebase.initializeApp(config);
    } catch (err) {
      // we skip the "already exists" message which is
      // not an actual error when we're hot-reloading
      if (!/already exists/.test(err.message)) {
        console.error("Firebase initialization error", err.stack);
      }
    }
    const auth = firebase.auth();
    return { firebase, auth };
  } else if (url == "us-central1-wl-test-2.cloudfunctions.net") {
    try {
      let config = {
        aapiKey: process.env.FIREBASE_API_KEY_2,
        authDomain: process.env.FIREBASE_AUTH_DOMAIN_2,
        databaseURL: process.env.FIREBASE_DATABASE_URL_2,
        projectId: process.env.FIREBASE_PROJECT_ID_2,
        storageBucket: process.env.FIREBASE_STORAGE_BUCKET_2,
        messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID_2,
        appId: process.env.FIREBASE_APP_ID_2,
        measurementId: process.env.FIREBASE_MEASUREMENT_ID_2
      };
      firebase.initializeApp(config);
    } catch (err) {
      // we skip the "already exists" message which is
      // not an actual error when we're hot-reloading
      if (!/already exists/.test(err.message)) {
        console.error("Firebase initialization error", err.stack);
      }
    }
    const auth = firebase.auth();
    return { firebase, auth };
  } else {
    try {
      let config = {
        apiKey: process.env.FIREBASE_API_KEY_FUE,
        authDomain: process.env.FIREBASE_AUTH_DOMAIN_FUE,
        databaseURL: process.env.FIREBASE_DATABASE_URL_FUE,
        projectId: process.env.FIREBASE_PROJECT_ID_FUE,
        storageBucket: process.env.FIREBASE_STORAGE_BUCKET_FUE,
        messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID_FUE,
        appId: process.env.FIREBASE_APP_ID_FUE,
        measurementId: process.env.FIREBASE_MEASUREMENT_ID_FUE
      };
      firebase.initializeApp(config);
    } catch (err) {
      // we skip the "already exists" message which is
      // not an actual error when we're hot-reloading
      if (!/already exists/.test(err.message)) {
        console.error("Firebase initialization error", err.stack);
      }
    }
    const auth = firebase.auth();
    return { firebase, auth };
  }
};

export default db;
