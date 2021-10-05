import React, { useState } from "react";
import Header from "../Misc/Header";
import CompImageGalContainer from "./CompImageGalContainer";
import { Pagination } from "antd";

const IMAGES_PER_PAGE = 9;

const CompetitionGallery = ({ art }) => {
  const [page, setPage] = useState({start: 0, end: 9});


  const handleChange = (value) => {
    let end = value * IMAGES_PER_PAGE;
    if (end > art.length)
    {
      end = art.length;
    }
    setPage({
      start: (value - 1) * IMAGES_PER_PAGE,
      end: end
    });
  };
  console.log(page.start, page.end);
  let current_page = art.slice(page.start, page.end);
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
          current_page.map(url => (<CompImageGalContainer url={url} />))
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
          total={art.length} //total number of card data available
        />
      </div>
    </>
  );
};



export default CompetitionGallery;
