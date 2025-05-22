import React from "react";
import LogoBanner from "./components/LogoBanner/LogoBanner";
import SinglePage from "../src/pages/SinglePage/SinglePage";

const App: React.FC = () => {
  return (
    <>
      <LogoBanner />
      <SinglePage />
    </>
  );
};

export default App;
