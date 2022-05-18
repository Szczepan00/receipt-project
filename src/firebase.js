import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyBiQcV2tBdVA3QHLUj_SXfEjn7Wit5Ktxc",
    authDomain: "paragon-15418.firebaseapp.com",
    projectId: "paragon-15418",
    storageBucket: "paragon-15418.appspot.com",
    messagingSenderId: "231510957614",
    appId: "1:231510957614:web:a209ab03d852915b92c9bf"
};

// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;