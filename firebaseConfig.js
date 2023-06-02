
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyD3sM8ZVCsNdVf_YZhlEfTimRu5nvGSfck',
  authDomain: 'pup-planner-fe0fe.firebaseapp.com',
  projectId: 'pup-planner-fe0fe',
  storageBucket: 'pup-planner-fe0fe.appspot.com',
  messagingSenderId: '495615955917',
  appId: '1:495615955917:web:c4775cdccb8ac35353ea84',
  measurementId: 'G-4DPLWPJ1BY',
};

const app = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage };
