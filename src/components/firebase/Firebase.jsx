import { faL } from "@fortawesome/free-solid-svg-icons";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider ,signOut} from "firebase/auth";

// import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyBy7eJSyIo9yvvxFJmH84eAlmFCESiNTAg",
  authDomain: "malostream.firebaseapp.com",
  projectId: "malostream",
  storageBucket: "malostream.appspot.com",
  messagingSenderId: "929486927697",
  appId: "1:929486927697:web:38d707d700c7464e834570",
  measurementId: "G-RB0BM7LSH8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

const provider = new GoogleAuthProvider() 
export const SignInWithGoogle = () => {
  signInWithPopup(auth, provider).then((result) => {
    console.log(result)
    const name = result.user.displayName
    const email = result.user.email
    const profilePic = result.user.photoURL
    
    localStorage.setItem("Name", name)
    localStorage.setItem("Email", email)
    localStorage.setItem("ProfilePic", profilePic)
    location.href="/librairie"
    
  }).catch(error => {
    console.log(error);
  })
  return true
} 
export const LogOut = () => {
  signOut(auth).then((result) => {
    console.log(result)
  }).catch(error => {
    console.log(error)
  })
}
// const analytics = getAnalytics(app);