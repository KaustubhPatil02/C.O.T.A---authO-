import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
function StartFirebase(){
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
    const app = initializeApp(firebaseConfig);
    return getDatabase(app);
}

export default StartFirebase;