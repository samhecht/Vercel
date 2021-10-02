import React from 'react';
import Layout from "../components/Layout";
import Header from "../components/Misc/Header";
import Hero from "../components/Homepage/1Hero";
import Roadmap from "../components/Homepage/2Roadmap";
import Footer from "../components/Homepage/Footer"
import MembersHome from "../components/Members/M-H";
import Artists from "../components/Homepage/3Artists";


const Index = () => {
return (
  <Layout pageTitle="EVO-DAO">
    <Header />
    <Hero />

    <Artists />

    <MembersHome/>
    <Roadmap />
 
    <Footer />
  </Layout>
);
}

export default Index;
