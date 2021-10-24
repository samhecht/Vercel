import React from "react";
import MyForm from "../../components/CompetitionForm/form";
import EvoLogin from "../../components/EvoLogin";
import Header from "../../components/Misc/Header";

const SubmitArtPage = () => {
  return (
    <>
      <Header />
      <EvoLogin />
      <MyForm />
    </>
  );
};

export default SubmitArtPage;