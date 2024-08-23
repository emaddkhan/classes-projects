// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyC9Y2PrQLdTZnoQFMeBLypHTA4CXvV2JWM",
  
//   authDomain: "laravel-nuxtjs.firebaseapp.com",
//   databaseURL: "https://laravel-nuxtjs.firebaseio.com",
//   projectId: "laravel-nuxtjs",
//   storageBucket: "laravel-nuxtjs.appspot.com",
//   messagingSenderId: "485211033057",
//   appId: "1:485211033057:web:52f061411b5d615fbed6a0",
// };

// // Initialize Firebase
// initializeApp(firebaseConfig);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArcLYVPFpbkIrvlqPD2C2Ua7z5nMIrHDo",
  authDomain: "food-hot-hai.firebaseapp.com",
  projectId: "food-hot-hai",
  storageBucket: "food-hot-hai.appspot.com",
  messagingSenderId: "636629752258",
  appId: "1:636629752258:web:256ced668a7c5a27989e5b",
  measurementId: "G-BJ7Z9GSP8D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app)