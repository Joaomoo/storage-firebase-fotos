import {initializeApp} from "firebase/app";
import {getStorage} from "firebase/storage";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD_8Kj3gQE1kbz7msk34N-wO5ebHX30BwA",
  authDomain: "nooo-57585.firebaseapp.com",
  projectId: "nooo-57585",
  storageBucket: "nooo-57585.appspot.com",
  messagingSenderId: "47210145113",
  appId: "1:47210145113:web:5a6057019309dad778d848"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const fire = getFirestore(app);


