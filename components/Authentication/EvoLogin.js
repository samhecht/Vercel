import React from "react";
import { Container, Button } from "reactstrap";
import { getAuth, signInWithPopup, TwitterAuthProvider } from "firebase/auth";
import fbApp from "../../firebase/firebaseClient.ts";
import { getFirestore, getDoc, setDoc, doc } from "firebase/firestore";

const EvoLogin = ({ hideModal }) => {
    // Login through twitter
    const handleLogin = () => {
        const auth = getAuth(fbApp);
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
        });

        hideModal();
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