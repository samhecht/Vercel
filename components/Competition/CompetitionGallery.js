import React, { useEffect, useState } from "react";
import Header from "../Misc/Header";
import CompImageGalContainer from "./CompImageGalContainer";
import { Pagination } from "antd";
// import { initializeApp } from "@firebase/app";
import { getFirestore, getDocs, collection } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "@firebase/auth";
import fbApp from "../../firebase/firebaseClient.ts";

const IMAGES_PER_PAGE = 9;

const CompetitionGallery = () => {
  const [page, setPage] = useState({start: 0, end: 9});
  const [artwork, setArtwork] = useState([]);
  const [currUserId, setCurrUserId] = useState("");


  useEffect(async () => {
    // Grab database
    const db = getFirestore(fbApp);

    // Get all art entries
    const querySnapshot = await getDocs(collection(db, "Artwork"));
    let artwork_objs = [];
    let unsub_art = querySnapshot.forEach((doc) => {
      artwork_objs.push({
        ...doc.data(),
        artId: doc.id
      });
    });

    // Set internal art state
    setArtwork(artwork_objs);

    // Handle authentication
    const auth = getAuth(fbApp);
    let unsub_auth = onAuthStateChanged(auth, async (user) => {
      console.log("auth state changed", user);
      if (user) {
        const uid = user.uid;
        setCurrUserId(uid);

      } else {
        setCurrUserId("");
      }
    });

    // Clean up listeners
    return () => {
      unsub_auth();
      unsub_art();
    }
  }, [currUserId]);
  

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
