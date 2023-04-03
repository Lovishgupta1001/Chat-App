import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyAzOfSeh03VgCrbdTBteHFBjtnPDb49598",
    authDomain: "chat-app-lovish.firebaseapp.com",
    projectId: "chat-app-lovish",
    storageBucket: "chat-app-lovish.appspot.com",
    messagingSenderId: "500500668368",
    appId: "1:500500668368:web:38c74d6d4d6c1c009563d5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()