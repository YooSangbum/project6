import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyARI8eddYslNDsxFsWVTkkKRpjM8c1KwAU",
    authDomain: "wepet-388905.firebaseapp.com",
    projectId: "wepet-388905",
    storageBucket: "wepet-388905.appspot.com",
    messagingSenderId: "561166037352",
    appId: "1:561166037352:web:c20e3f4b72b451f40166dd"
};

// Initialize Firebase (APP이라는 변수안에 파이어베이스를 실행하는데 KEY값을 담고간다.)
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);