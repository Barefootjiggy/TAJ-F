import React from "react";
import "./App.css";
import NavBar from "../src/components/NavBar/NavBar";
import SinglePage from "../src/pages/SinglePage/SinglePage";

const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <SinglePage />
    </>
  );
};

export default App;
