import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyA9mTP_UfcxwS8ETi1T72FO9Z033Fa-cU4",
  authDomain: "robertson-development.firebaseapp.com",
  databaseURL: "https://robertson-development.firebaseio.com",
  storageBucket: "robertson-development.appspot.com",
  messagingSenderId: "1052517571029"
};

export const firebaseApp = firebase.initializeApp(config);

export const db = firebaseApp.database();

export const storage = firebaseApp.storage();
