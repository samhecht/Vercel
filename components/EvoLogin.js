import React, { useEffect, useState } from "react";
import { Container, Button } from "reactstrap";
import { getAuth, signInWithPopup, TwitterAuthProvider } from "firebase/auth";
import { initializeApp } from "@firebase/app";
import { getFirestore, getDoc, setDoc, doc } from "firebase/firestore";

const EvoLogin = () => {
    const [firebaseApp, setFirebaseApp] = useState(null);
    const [twitProvider, setTwitProvider] = useState(null);

    useEffect(() => {
        if (firebaseApp === null) {
            // TODO: Add SDKs for Firebase products that you want to use
            // https://firebase.google.com/docs/web/setup#available-libraries

            // Your web app's Firebase configuration
            // For Firebase JS SDK v7.20.0 and later, measurementId is optional
            const firebaseConfig = {
                apiKey: "AIzaSyCCCHm8cMQnAfXVkmaXwlQzBzt5SS-_ZHE",
                authDomain: "protean-keyword-326516.firebaseapp.com",
                projectId: "protean-keyword-326516",
                storageBucket: "protean-keyword-326516.appspot.com",
                messagingSenderId: "852906376122",
                appId: "1:852906376122:web:bba9be0c5f42521f18bb83",
                measurementId: "G-P5PEMYT2BF"
            };

            // Initialize Firebase
            const app = initializeApp(firebaseConfig);
            setFirebaseApp(app);
        }

        if (twitProvider === null) {
            const provider = new TwitterAuthProvider();
            setTwitProvider(provider);
        }
    });
    // Login through twitter
    const handleLogin = () => {
        if (firebaseApp === null || twitProvider === null) {
            console.log("no firebase app initialized");
            return;
        }
        const auth = getAuth();
        signInWithPopup(auth, new TwitterAuthProvider())
        .then(async (result) => {
            // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
            // You can use these server side with your app's credentials to access the Twitter API.
            const credential = TwitterAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const secret = credential.secret;

            // The signed-in user info.
            const user = result.user;

            const db = getFirestore();
            
            const twitter_handle = user.reloadUserInfo.screenName;
            const name = user.displayName;
            const id = user.uid;
            console.log("success", user, id);
            const docRef = doc(db, "users", id);
            const docSnap = await getDoc(docRef)

            if (docSnap.exists()) {
                console.log("Successfully logged in");
            } else {
                console.log("trying to set user: ", id)
                await setDoc(doc(db, "users", id), {
                    twitterHandle: twitter_handle,
                    name: name,
                });
            }
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = TwitterAuthProvider.credentialFromError(error);

            console.log("error", errorCode, errorMessage, email, credential);
            // ...
        });
    }

    return (
        <Container style={{
            width: "60%",
            flexDirection: "row",
            alignContent: "center",
            alignItems: "center"
        }}
        >
            <Button 
                onClick={handleLogin}
            >
                Login with Twitter
            </Button>
        </Container>
    )
}

export default EvoLogin;