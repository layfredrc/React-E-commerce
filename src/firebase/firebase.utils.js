import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBZrTe4vMpkQ593L4HC1OfJ5N5PlF5YEvw",
	authDomain: "react-e-commerce-5ab7a.firebaseapp.com",
	databaseURL: "https://react-e-commerce-5ab7a.firebaseio.com",
	projectId: "react-e-commerce-5ab7a",
	storageBucket: "react-e-commerce-5ab7a.appspot.com",
	messagingSenderId: "1008974644643",
	appId: "1:1008974644643:web:598ccfdd4cc0e9b6ad0616",
	measurementId: "G-3C9RY7Z3WJ",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
