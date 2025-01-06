import {initializeApp} from 'firebase/app';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyBCQXWmz2aherV1XyZifoZT-e8-GM8ViGA",
    authDomain: "inventario-94dc1.firebaseapp.com",
    projectId: "inventario-94dc1",
    storageBucket: "inventario-94dc1.firebasestorage.app",
    messagingSenderId: "156389393220",
    appId: "1:156389393220:web:74bb6aad7e118764614d11"
};


const app = initializeApp(firebaseConfig);



//Get Firebase Auth instance
const auth = getAuth(app);


export {auth, createUserWithEmailAndPassword, signInWithEmailAndPassword};