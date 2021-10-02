import React from 'react';
import Layout from "../../components/Layout";
import Header from "../../components/Misc/Header";
import FAQ from "../../components/Misc/FAQ";
import Footer from  '../../components/Homepage/Footer';
import InfoA from "../../components/Misc/Info";

const Compon= () => {
return (
  <Layout pageTitle="Landing Page Nextjs">
    <Header />
    <InfoA />
    <FAQ />

    <Footer />
  </Layout>
);
}
export default Compon;
