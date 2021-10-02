import React from "react";
import Layout from "../../components/Layout";
import Members from "../../components/Members/Members";
import Header from "../../components/Misc/Header";
import Gallerydis from "../../components/Members/Gallery-display.js";
const Index = () => {
  return (
    <Layout pageTitle="EVO-DAO">
      <Header />
      <Members />
<Gallerydis/>
    </Layout>
  );
};
export default Index;
