import React from "react";
import CompetitionGallery from "../../components/Competition/CompetitionGallery";

const CompetitionGalleryPage = ({ art }) => {
  return (<CompetitionGallery art={art} />);
};

export async function getServerSideProps(context) {
  return {
    props: { art: "Artwork" },
  }
}

export default CompetitionGalleryPage;