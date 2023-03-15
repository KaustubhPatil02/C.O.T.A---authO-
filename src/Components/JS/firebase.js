import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDOOSrbvdpV91A3D7rNyetjG1jyfUzBMNI",
  authDomain: "kota-35cec.firebaseapp.com",
  databaseURL: "https://kota-35cec-default-rtdb.firebaseio.com",
  projectId: "kota-35cec",
  storageBucket: "kota-35cec.appspot.com",
  messagingSenderId: "453360147250",
  appId: "1:453360147250:web:d38f5ac77f2e2e7d9a152b",
  measurementId: "G-3755X3NRD5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
