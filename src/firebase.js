import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDn5E1WMNEMp927XCu2gyZhEwMlw3bR-Mk",
  authDomain: "cart-portfolio.firebaseapp.com",
  databaseURL: "https://cart-portfolio.firebaseio.com",
  projectId: "cart-portfolio",
  storageBucket: "cart-portfolio.appspot.com",
  messagingSenderId: "197656404058",
  appId: "1:197656404058:web:79ae9b975563e0704f3863",
  measurementId: "G-W550M95MM3"
});

const auth = firebaseApp.auth();

export { auth };