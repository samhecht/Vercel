import React from 'react';
import Layout from "../../components/Layout";
import Header from "../../components/Misc/Header";
import Marketplaces from "../../components/Misc/Marketplaces";
import Footer from  '../../components/Homepage/Footer';

const Contest1 = () => {
return (
  <Layout pageTitle="Landing Page Nextjs">
    <Header />

    <Marketplaces />
    <Footer />
  </Layout>
);
}
export default Contest1;
