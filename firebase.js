import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCB3-hAmot0NKKIMLbTA52FRpVwkajGy8w",
    authDomain: "restaurantbp-6a6eb.firebaseapp.com",
    projectId: "restaurantbp-6a6eb",
    storageBucket: "restaurantbp-6a6eb.appspot.com",
    messagingSenderId: "859579066784",
    appId: "1:859579066784:web:7c3a431cb1216ff4b99cc5",
    measurementId: "G-0ZTS6LJT53"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };