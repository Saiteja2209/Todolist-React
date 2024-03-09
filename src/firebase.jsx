import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCGAAcRSluSH7XyVIJimjGNL2WsAdDYlYE",
    authDomain: "todo-crud-ad7d0.firebaseapp.com",
    projectId: "todo-crud-ad7d0",
    storageBucket: "todo-crud-ad7d0.appspot.com",
    messagingSenderId: "386023165055",
    appId: "1:386023165055:web:7cc20d39f82af172d1834a",
    measurementId: "G-5YGPHYCE4H"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export {db};