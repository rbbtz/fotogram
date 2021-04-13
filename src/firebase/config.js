import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

  // Web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAKVsXHVLDlCGSyeRgzxicBtSIAnKw5Iss",
    authDomain: "fotogram-8562f.firebaseapp.com",
    projectId: "fotogram-8562f",
    storageBucket: "fotogram-8562f.appspot.com",
    messagingSenderId: "875201186299",
    appId: "1:875201186299:web:0f446b5171c94a1b9be35e"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };

