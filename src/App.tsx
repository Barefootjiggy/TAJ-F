import React, { Suspense, lazy } from "react";
import SinglePage from "../src/pages/SinglePage/SinglePage";

// Lazy load LogoBanner to reduce initial JS bundle
const LogoBanner = lazy(() => import("./components/LogoBanner/LogoBanner"));

const App: React.FC = () => {
  return (
    <>
      <Suspense fallback={null}>
        <LogoBanner />
      </Suspense>
      <SinglePage />
    </>
  );
};

export default App;
