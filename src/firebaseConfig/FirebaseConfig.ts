import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBQe_8cFrBSVyRUFgYhd7KfxB2BETw0ifY",
  authDomain: "tech-2f51a.firebaseapp.com",
  projectId: "tech-2f51a",
  storageBucket: "tech-2f51a.appspot.com",
  messagingSenderId: "543928681662",
  appId: "1:543928681662:web:f7a33a9fb709bb2bc2caef"
};

export const firebaseApp = initializeApp(firebaseConfig);