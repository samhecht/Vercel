import React, { useEffect, useState } from "react";
import Header from "../Misc/Header";
import CompImageGalContainer from "./CompImageGalContainer";
import EvoLogin from "../EvoLogin";
import { Pagination } from "antd";
import { initializeApp } from "@firebase/app";
import { getFirestore, getDocs, collection, addDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "@firebase/auth";

const IMAGES_PER_PAGE = 9;

const CompetitionGallery = () => {
  const [page, setPage] = useState({start: 0, end: 9});
  const [artwork, setArtwork] = useState([]);
  const [firebaseApp, setFirebaseApp] = useState(null);
  const [likedArtwork, setLikedArtwork] = useState([]);
  const [currUserId, setCurrUserId] = useState("");


  // Setup firebase integrations
  // These should probably be moved to a separate file at some point
  useEffect(async () => {
    if (firebaseApp === null)
    {
        // INITIALIZE firebase
        const firebaseConfig = {
          apiKey: process.env.FIRESTORE_API_KEY,
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
    } else {
      // Get all images
      const db = getFirestore();

      const querySnapshot = await getDocs(collection(db, "Artwork"));
      let artwork_objs = [];
      querySnapshot.forEach((doc) => {
        artwork_objs.push({
          ...doc.data(),
          artId: doc.id
        });
      });
      setArtwork(artwork_objs);

      // AUTH and liked images
      const auth = getAuth();
      onAuthStateChanged(auth, async (user) => {

        if (user) {
          const uid = user.uid;
          const db = getFirestore();
          const querySnapshot = await getDocs(collection(db, "users", uid, "likedArtwork"));
          let likedArtworkTemp = [];
          querySnapshot.forEach((doc) => {
            console.log(`Is in liked: ${doc.id} => ${doc.data()}`);
            likedArtworkTemp.push(doc.id);
          });
          setCurrUserId(uid);
          setLikedArtwork(likedArtworkTemp);

        } else {
          setCurrUserId("");
          setLikedArtwork([]);
          console.log("User not logged in");
        }

      });


    }
  }, [firebaseApp]);
  

  const handleChange = (value) => {
    let end = value * IMAGES_PER_PAGE;
    if (end > artwork.length)
    {
      end = artwork.length;
    }
    setPage({
      start: (value - 1) * IMAGES_PER_PAGE,
      end: end
    });
  };

  const current_page = artwork.slice(page.start, page.end);
  console.log(likedArtwork);
  return (
    <>
      <div>
      <Header />
      </div>

      <div>
      <h1 style={{
          color: "white", 
          textAlign: "center",
          paddingTop: "100px"
        }}>
          Competition Entries
      </h1>
      <EvoLogin />
      <div style={{  
        marginTop: "30px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignContent: "center",
        width: "100%",
        flexWrap: "wrap",
      }}
      >
        {
          current_page.map(art_obj => (
              <CompImageGalContainer 
                artwork_obj={art_obj} 
                isLiked={false}
                currUserId={currUserId}
              />
            )
          )
        }
      </div>
      <Pagination
          style={{
            display: "block",
            textAlign: "center",
            marginTop: "30px"
          }}
          defaultCurrent={1}
          defaultPageSize={IMAGES_PER_PAGE} //default size of page
          onChange={handleChange}
          total={artwork.length} //total number of card data available
        />
      </div>
    </>
  );
};



export default CompetitionGallery;
