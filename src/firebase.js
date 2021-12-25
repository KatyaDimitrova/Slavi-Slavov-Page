import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyCzxlV7dogDSwKu2Nhy0Zy-yY6KCZgSvLg",
    authDomain: "slavi-slavov-page.firebaseapp.com",
    projectId: "slavi-slavov-page",
    storageBucket: "slavi-slavov-page.appspot.com",
    messagingSenderId: "816678629798",
    appId: "1:816678629798:web:c02d066ff06dc68c1a1f67",
    measurementId: "G-QFLHW3TPDS"
  };

  firebase.initializeApp(config);
   export const auth = firebase.auth();
   export const db = firebase.firestore();

   export const provider = new firebase.auth.GoogleAuthProvider();

   provider.setCustomParameters({prompt: 'select_account'});
//    export const signInWithGoogle = () => auth.signInWithPopup(provider);

   export default firebase;
