import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDdijgk-0-t4ldTlAQaCQtC8P-TsdXXgvQ",
    authDomain: "wedding-card-67a1d.firebaseapp.com",
    databaseURL: "https://wedding-card-67a1d-default-rtdb.asia-southeast1.firebasedatabase.app/",
    projectId: "wedding-card-67a1d",
    storageBucket: "wedding-card-67a1d.appspot.com",
    messagingSenderId: "602909815157",
    appId: "1:602909815157:web:bf02eaa52ea8a70a88633c"
};

// 初始化 Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);

// 獲取 Realtime Database 實例