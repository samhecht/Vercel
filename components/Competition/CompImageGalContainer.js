import React, { useState, useEffect } from "react";
import { Card, Button } from "antd";
import { deleteDoc, doc, getDoc, getFirestore, increment, setDoc, updateDoc } from "@firebase/firestore";
import fbApp from "../../firebase/firebaseClient.ts";
import LoginPopupPrompt from "../Authentication/LoginPopupPrompt";

const CompImageGalContainer = ({ artwork_obj, currUserId }) => {

  const [likedByMe, setLikedByMe] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  useEffect(async () => {
    // Grab database
    const db = getFirestore(fbApp);

    // Check for a document indicating we liked this artwork
    if (currUserId) {
      const docRef = doc(db, "users", currUserId, "likedArtwork", artwork_obj.artId);
      const docSnap = await getDoc(docRef);
      
      // Update like state
      if (docSnap.exists()) {
        if (!likedByMe)
          setLikedByMe(true);
      } else {
        if (likedByMe)
          setLikedByMe(false);
      }
    }
  });

  const likeImage = async () => {

    if (currUserId === "") {
      setShowLoginModal(true);
      return;
    }

    try {
      const db = getFirestore(fbApp);
      const art_doc = doc(db, "Artwork", artwork_obj.artId);
      await updateDoc(art_doc, {
        likes: increment(1),
      });
      
      await setDoc(doc(db, "users", currUserId, "likedArtwork", artwork_obj.artId), {});

      setLikedByMe(true);
    } catch(e) {
      console.log("Couldnt add like document: ", e);
    }
  }

  const unlikeImage = async () => {
    if (currUserId === "") {
      setShowLoginModal(true);
      return;
    }

    try {
      const db = getFirestore(fbApp);
      const art_doc = doc(db, "Artwork", artwork_obj.artId);
      await updateDoc(art_doc, {
        likes: increment(-1),
      });
      await deleteDoc(doc(db, "users", currUserId, "likedArtwork", artwork_obj.artId));
      setLikedByMe(false);
    } catch (e) {
      console.log("Couldn't upadte document: ", e);
    }
  }

  if (likedByMe) {
    return (
      <Card                
        style={{
          width: "26%",
          marginTop: "100px",
        }}
      >

        <LoginPopupPrompt visibleProp={showLoginModal} />
        <a href={artwork_obj.publicUrl}>
            <img src={artwork_obj.publicUrl} />
        </a>
        <p>Likes: {artwork_obj.likes}</p>
        <Button onClick={unlikeImage}>Un-Like</Button>
          
      </Card>
    );
  } else {
    return (
      <Card                
        style={{
          width: "26%",
          marginTop: "100px",
        }}
      >
          <LoginPopupPrompt visibleProp={showLoginModal} setShowLoginModal={setShowLoginModal} />
          <a href={artwork_obj.publicUrl}>
              <img src={artwork_obj.publicUrl} />
          </a>
          <p>Likes: {artwork_obj.likes}</p>
          <Button onClick={likeImage}>likeImage</Button>
 
      </Card>
    );
  }

};

export default CompImageGalContainer;