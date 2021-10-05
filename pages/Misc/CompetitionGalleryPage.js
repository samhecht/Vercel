import React from "react";
import axios from "axios";
import { Storage } from "@google-cloud/storage";
import CompetitionGallery from "../../components/Competition/CompetitionGallery";

const CompetitionGalleryPage = ({ art }) => {
  art.forEach(art_url => {
    console.log("Url: ", art_url);
  });
  return (<CompetitionGallery art={art} />);
};

export async function getServerSideProps(context) {
  try {
    const { client_email, private_key, project_id } = JSON.parse(
      Buffer.from(process.env.GCLOUD_CREDENTIALS, 'base64').toString()
    );
    
    console.log(client_email, private_key, project_id);
    // const storage = new Storage({keyFilename: "protean-keyword-326516-89bdde152843.json"});
    const storage = new Storage({
      client_email: client_email,
      private_key: private_key,
      project_id: project_id
    });
    const [files] = await storage.bucket("evo-test-bucket").getFiles();
    console.log('Files:');
    let file_urls = files.map(file => {
      console.log(file.publicUrl());
      return file.publicUrl();
    });
    return {
      props: { art: file_urls },
    }
  } catch (e)
  {
    console.log("Authentication failed");
    console.log(e);
    return {
      props: { art: []}, // will be passed to the page component as props
    }
  }
}

export default CompetitionGalleryPage;