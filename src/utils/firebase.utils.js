import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from "firebase/auth";

import {
    doc,
    getDoc,
    setDoc,
    getFirestore
} from 'firebase/firestore';

import {accountsData} from '../storage/chartAccountsData';

const firebaseConfig = {
    apiKey: "AIzaSyAIfYFTqlnCBKm5xrw0gDNrBUVmnToC6wQ",
    authDomain: "expertjs-4271d.firebaseapp.com",
    projectId: "expertjs-4271d",
    storageBucket: "expertjs-4271d.appspot.com",
    messagingSenderId: "773786530131",
    appId: "1:773786530131:web:17beb2f87ac9b349b771a6",
    measurementId: "G-8M712VXGDV"
};



// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters(
    { prompt: "select_account" }
)

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocFromAuth = async (userAuth) => {
    const userDocref = doc(db, "user", userAuth.uid);

    const userSnapshot = await getDoc(userDocref);
    if (!userSnapshot.exists()) {

        try {
            const {displayName, email}= userAuth;
            await setDoc(userDocref,{
                displayName,
                email,
                accountsData
            }
              
            )

        } catch (e) {
            console.log('eRROR CREATING USER',e);
        }

    } else {
        return userDocref;
    }
};