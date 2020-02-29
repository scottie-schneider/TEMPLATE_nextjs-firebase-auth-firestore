import React, { createContext, useContext } from "react";
import App from "next/app";
require("firebase/firestore");
require("firebase/functions");
require("firebase/storage");
require("firebase/auth");

import db from "../lib/db";

const firebase = db(true);
const auth = firebase.auth();
const firestore = firebase.firestore();

const FirebaseContext = createContext(null);
export { FirebaseContext };
export default class MyApp extends App {
  render() {
    const { Component, pageProps, tenantObject, url } = this.props;

    return (
      <FirebaseContext.Provider
        value={{ firebase: firebase, firestore: firestore, auth: auth }}
      >
        <Component {...pageProps} />
      </FirebaseContext.Provider>
    );
  }
}
