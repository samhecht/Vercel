import React, { useState, useEffect } from "react";
import { Card, Button, Row } from "antd";
import { deleteDoc, doc, getDoc, getFirestore, increment, setDoc, updateDoc } from "@firebase/firestore";
import fbApp from "../../firebase/firebaseClient.ts";
import LoginPopupPrompt from "../Authentication/LoginPopupPrompt";
import { AiFillHeart } from "react-icons/ai";
const CompImageGalContainer = ({ artwork_obj, currUserId }) => {

  const [likedByMe, setLikedByMe] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [likes, setLikes] = useState(artwork_obj.likes);

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
      setLikes(likes + 1);
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
      setLikes(likes - 1);
    } catch (e) {
      console.log("Couldn't upadte document: ", e);
    }
  }

  if (likedByMe) {
    return (
      <Card className="card" style={{ margin: 50 }}>
        <LoginPopupPrompt visibleProp={showLoginModal} />
        <a href="/ImgS">
          <div className="cardinner">
            <img src={artwork_obj.publicUrl} />
          </div>
        </a>
        <Row>
          <Button
            onClick={unlikeImage}
            style={{
              backgroundColor: "white",
              color: "white",
              borderColor: "white",
              borderRadius: 0,
              borderRadius: "50%",

              width: 30,
              height: 30,
            }}
          >
            <AiFillHeart
              style={{
                marginLeft: "-10px",
                justifyContent: "center",
                width: "25px",
                height: "25px",
                alignContent: "center",
                padding: "auto",
                color: "red",
              }}
            />
          </Button>
          <p style={{ marginLeft: 5 }}>{artwork_obj.likes}</p>
        </Row>
      </Card>
    );
  } else {
    return (
      <Card className="card" style={{ margin: 50 }}>
        <LoginPopupPrompt
          visibleProp={showLoginModal}
          setShowLoginModal={setShowLoginModal}
        />
        <a href="/ImgS">
          <div className="cardinner">
            <img src={artwork_obj.publicUrl} />
          </div>
        </a>
        <Row>
          <Button
            style={{
              backgroundColor: "white",
              color: "white",
              borderColor: "white",
              borderRadius: 0,
              borderRadius: "50%",

              width: 30,
              height: 30,
            }}
            onClick={likeImage}
          >
            <AiFillHeart
              style={{
                color: "black",
                margin: "auto",
                justifyContent: "center",
                width: "25px",
                height: "25px",
                marginLeft: "-12px",
              }}
            />
          </Button>
          <p style={{ marginLeft: 5 }}>{artwork_obj.likes}</p>
        </Row>
      </Card>
    );
  }

};

export default CompImageGalContainer;