import * as firebase from 'firebase';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBv6nah1xjoxA4aCAJquh5gbYaZYmm3WlU',
  authDomain: 'boomtowndemo.firebaseapp.com',
  databaseURL: 'https://boomtowndemo.firebaseio.com',
  projectId: 'boomtowndemo',
  storageBucket: 'boomtowndemo.appspot.com',
  messagingSenderId: '392888789620'
};

const FirebaseApp = firebase.initializeApp(config);
const FirebaseAuth = FirebaseApp.auth();
const FirebaseDB = firebase.database();
const FirebaseStorage = firebase.storage().ref();

export {
  FirebaseApp,
  FirebaseAuth,
  FirebaseDB,
  FirebaseStorage
};
