import React from "react";

const CompImageGalContainer = ({ url }) => {
    return (
        <div                 
          style={{
            width: "26%",
            marginTop: "100px",
          }}
        >
            <a href={url}>
                <img src={url} />
            </a>
        </div>
    );
};

export default CompImageGalContainer;