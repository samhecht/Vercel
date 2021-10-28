import React, { useEffect, useState } from "react";
import Header from "../Misc/Header";
import CompImageGalContainer from "./CompImageGalContainer";
import { Pagination, Checkbox, Row, Col } from "antd";
import { getFirestore, getDocs, collection } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "@firebase/auth";
import fbApp from "../../firebase/firebaseClient.ts";

const IMAGES_PER_PAGE = 9;

const CompetitionGallery = () => {
  const [page, setPage] = useState({start: 0, end: 9});
  const [artwork, setArtwork] = useState([]);
  const [currUserId, setCurrUserId] = useState("");
  const [filters, setFilters] = useState(new Set());


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
  }, [currUserId, filters]);
  

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

  // Takes an artwork object and checks if it passes the sorting filters
  const passesFilter = (art_obj) => {
    let passes_filter = false;
    const curr_filters = new Set(filters);

    // No filters -> passes by default
    if (curr_filters.size === 0) {
      passes_filter = true;
    }

    // If element has one of the selected categories then show it
    if (art_obj.category) {
      art_obj.category.split(";").forEach(cat => {
        if (curr_filters.has(cat)) {
          passes_filter = true;
        }
      });
    }
    
    return passes_filter;
  };

  // Sort artwork first by filters and then by likes
  artwork.sort((a, b) => {
    const a_passes = passesFilter(a);
    const b_passes = passesFilter(b);

    if (a_passes && !b_passes) {
      return -1;
    } else if (b_passes && !a_passes) {
      return 1;
    }

    return b.likes - a.likes;
  });

  // Get current paginated images
  const current_page = artwork.slice(page.start, page.end);

  return (
    <>
      <div>
        <Header />
      </div>

      <div>
        <h1
          style={{
            backgroundColor: "white",
            textAlign: "center",
            paddingTop: "100px",
          }}
        >
          Competition Entries
        </h1>
        <div
          style={{
            backgroundColor: "white",
            textAlign: "center",
            paddingTop: "100px",
   
          }}
        >
          <h1>Filters</h1>
          <Checkbox.Group>
            <Row>
              <Col span={8}>
                <Checkbox
                  value="abstract"
                  style={{ lineHeight: "32px", color: "black" }}
                  onChange={(e) => {
                    console.log("Actual filters: ", filters);
                    let new_filters = new Set(filters);
                    new_filters.delete("abstract");
                    if (e.target.checked) {
                      new_filters.add("abstract");
                    }
                    setFilters(new_filters);
                  }}
                >
                  Abstract
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox
                  value="generative"
                  style={{ lineHeight: "32px", color: "black" }}
                  onChange={(e) => {
                    let new_filters = new Set(filters);
                    new_filters.delete("generative");
                    if (e.target.checked) {
                      new_filters.add("generative");
                    }
                    setFilters(new_filters);
                  }}
                >
                  Generative
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox
                  value="3d"
                  style={{ lineHeight: "32px", color: "black" }}
                  onChange={(e) => {
                    let new_filters = new Set(filters);
                    new_filters.delete("3d");
                    if (e.target.checked) {
                      new_filters.add("3d");
                    }
                    setFilters(new_filters);
                  }}
                >
                  3d
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox
                  value="stylized"
                  style={{ lineHeight: "32px", color: "black" }}
                  onChange={(e) => {
                    let new_filters = new Set(filters);
                    new_filters.delete("stylized");
                    if (e.target.checked) {
                      new_filters.add("stylized");
                    }
                    setFilters(new_filters);
                  }}
                >
                  Styllized
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox
                  value="derivative"
                  style={{ lineHeight: "32px", color: "black" }}
                  onChange={(e) => {
                    let new_filters = new Set(filters);
                    new_filters.delete("derivative");
                    if (e.target.checked) {
                      new_filters.add("derivative");
                    }
                    setFilters(new_filters);
                  }}
                >
                  Derivative
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox
                  value="humour"
                  style={{ lineHeight: "32px", color: "black" }}
                  onChange={(e) => {
                    let new_filters = new Set(filters);
                    new_filters.delete("humour");
                    if (e.target.checked) {
                      new_filters.add("humour");
                    }
                    setFilters(new_filters);
                  }}
                >
                  Humour
                </Checkbox>
              </Col>
            </Row>
          </Checkbox.Group>
        </div>
        <div
          style={{
            marginTop: "0px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignContent: "center",
            width: "100%",
            flexWrap: "wrap",
            backgroundColor:'white'
          }}
        >
          {current_page.map((art_obj) => (
            <CompImageGalContainer
              artwork_obj={art_obj}
              currUserId={currUserId}
            />
          ))}
        </div>
        <Pagination
          style={{
            display: "block",
            textAlign: "center",
            marginTop: "30px",
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
