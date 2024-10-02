
import {initializeApp} from 'firebase/app'
import { getAuth } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

// const firebaseConfig = {
//     apiKey: "AIzaSyBJ3UuZkvHdINbfkSBDNHUQwS186GntD-g",
//     authDomain: "my-articles-e49dc.firebaseapp.com",
//     projectId: "my-articles-e49dc",
//     storageBucket: "my-articles-e49dc.appspot.com",
//     messagingSenderId: "58049292763",
//     appId: "1:58049292763:web:f9581d31abf0824018dffe"
//   };
  const firebaseConfig = {
    apiKey: "AIzaSyDXlME_Ntuk9c4nFlIb5eiz4dhVPDxVPIE",
    authDomain: "port-blog-article.firebaseapp.com",
    projectId: "port-blog-article",
    storageBucket: "port-blog-article.appspot.com",
    messagingSenderId: "193351237320",
    appId: "1:193351237320:web:e17a137a9c92b35186effd"
  };

  const app = initializeApp(firebaseConfig);

  export const storage = getStorage(app);
  export const db = getFirestore(app);
  export const auth =getAuth(app);







// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDXlME_Ntuk9c4nFlIb5eiz4dhVPDxVPIE",
//   authDomain: "port-blog-article.firebaseapp.com",
//   projectId: "port-blog-article",
//   storageBucket: "port-blog-article.appspot.com",
//   messagingSenderId: "193351237320",
//   appId: "1:193351237320:web:e17a137a9c92b35186effd"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);