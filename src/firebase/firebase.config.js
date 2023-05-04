// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCS_zqd5wPxSHmr8VxxK3vVvgkErkygyAI",
  authDomain: "chef-hunter-50cb3.firebaseapp.com",
  projectId: "chef-hunter-50cb3",
  storageBucket: "chef-hunter-50cb3.appspot.com",
  messagingSenderId: "517668358614",
  appId: "1:517668358614:web:9c6403acb6452cd28dbc77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;