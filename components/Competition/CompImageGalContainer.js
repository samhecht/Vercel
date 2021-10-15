import React, { useState, useEffect } from "react";
import { Card, Button } from "antd";
import { collection, doc, getFirestore, increment, updateDoc } from "@firebase/firestore";

const CompImageGalContainer = ({ artwork_obj, isLiked, currUserId }) => {

  const [likedByMe, setLikedByMe] = useState(isLiked);

  useEffect(() => {
    console.log("Art likedbyme: ", isLiked);
    console.log("Comp: ", isLiked, artwork_obj, currUserId);
  }, [likedByMe]);

  const likeImage = async () => {
    try {
      const db = getFirestore();
      const art_doc = doc(db, "Artwork", artwork_obj.artId);
      await updateDoc(art_doc, {
        likes: increment(1),
      });
      //THIS DOESNT WORK YET
      // const liked_doc = doc(db, "users", currUserId, "likedArtwork")
      // await addDoc(db, "users", currUserId, "likedArtwork", artwork_obj.artId, {});
      // let col = db.collection(`users/${currUserId}/likedArtwork`);
      let docy = doc(db, "users", currUserId, "likedArtwork", artwork_obj.artId);
      await docy.set({});
      // const doc = db.doc(`users/${currUserId}/likedArtwork/${artwork_obj.artId}`);
      // await doc.set({});
      // collection(db, `users/${currUserId}/likedArtwork`).doc(artwork_obj.artId).set({});
  
      setLikedByMe(true);
    } catch(e) {
      console.log("Couldnt add like document: ", e);
    }
  }

  const unlikeImage = async () => {
    const db = getFirestore();
    const art_doc = doc(db, "Artwork", artwork_obj.artId);
    await updateDoc(art_doc, {
      likes: increment(-1),
    });
    setLikedByMe(false);
  }

  if (likedByMe) {
    return (
      <Card                
        style={{
          width: "26%",
          marginTop: "100px",
        }}
      >
          <a href={artwork_obj.publicUrl}>
              <img src={artwork_obj.publicUrl} />
          </a>
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
          <a href={artwork_obj.publicUrl}>
              <img src={artwork_obj.publicUrl} />
          </a>

          <Button onClick={likeImage}>likeImage</Button>
 
      </Card>
    );
  }

};

export default CompImageGalContainer;